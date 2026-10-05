"""Create portable server and source ZIP files using only the Python standard library."""
import argparse
import hashlib
import json
import pathlib
import re
import zipfile

root = pathlib.Path(__file__).resolve().parent.parent
version = json.loads((root / 'package.json').read_text(encoding='utf-8'))['version']
if not re.fullmatch(r'[0-9]+\.[0-9]+\.[0-9]+(?:[-+][0-9A-Za-z.-]+)?', version):
    raise SystemExit('Use a valid release version in package.json.')
parser = argparse.ArgumentParser()
parser.add_argument('--output', default=str(root / 'releases'))
args = parser.parse_args()
output = pathlib.Path(args.output).resolve()
if output == root or output == root / 'dist':
    raise SystemExit('Choose a separate output folder.')
output.mkdir(parents=True, exist_ok=True)

def write_zip(destination, entries):
    if destination.exists():
        raise SystemExit(f'{destination.name} already exists; use a new output folder.')
    with zipfile.ZipFile(destination, 'w', zipfile.ZIP_DEFLATED) as archive:
        for source, name in entries:
            archive.write(source, name)
    with zipfile.ZipFile(destination) as archive:
        bad = archive.testzip()
        if bad:
            raise SystemExit(f'Invalid ZIP member: {bad}')
    return {'file': destination.name, 'bytes': destination.stat().st_size,
            'sha256': hashlib.sha256(destination.read_bytes()).hexdigest()}

assets = [(p, p.relative_to(root / 'dist').as_posix()) for p in sorted((root / 'dist').rglob('*')) if p.is_file()]
if any(p.is_symlink() or '.openai' in p.parts for p, _ in assets):
    raise SystemExit('The public website must not contain platform metadata or symlinks.')
source_files = []
for name in ['dist', 'scripts', 'docs', '.github']:
    directory = root / name
    if directory.exists():
        source_files.extend(p for p in sorted(directory.rglob('*')) if p.is_file() and '__pycache__' not in p.parts)
source_files.extend(root / name for name in ['README.md', 'package.json', 'preview.mjs', '.gitignore'] if (root / name).is_file())
if any(p.is_symlink() for p in source_files):
    raise SystemExit('Source package must not contain symlinks.')
reports = [write_zip(output / f'broadmind-server-files-v{version}.zip', assets),
           write_zip(output / f'broadmind-source-v{version}.zip', [(p, p.relative_to(root).as_posix()) for p in source_files])]
(output / 'checksums.json').write_text(json.dumps(reports, indent=2) + '\n', encoding='utf-8')
for report in reports:
    print(f"{report['file']}: {report['bytes']} bytes; SHA256 {report['sha256']}")
