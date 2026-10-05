# Broadmind Corporate Training website

This is the editable source for the Broadmind website. The current release preserves the original logo and contains a responsive homepage, 36 searchable courses, suggested training pathways, a calendar area, company information, three leadership profiles, contact forms and frequently asked questions.

The owner-designated repository is [rdevdass/broadmind-website](https://github.com/rdevdass/broadmind-website). The production domain and hosting destination are still to be confirmed.

The site can be hosted on an ordinary web server. It has no runtime dependency on ChatGPT, Sites, a database or a paid website builder. JavaScript is required for its catalogue and navigation; a basic contact fallback is included for visitors without JavaScript.

## Run locally

Use Node.js to run:

```sh
node preview.mjs
```

Open `http://127.0.0.1:4173` in your browser. Stop the preview with Ctrl+C. The preview server is for local use, not production hosting. No dependency installation or build step is needed.

Run the project checks:

```sh
node scripts/check.mjs
```

## Edit the website

| File | Purpose |
| --- | --- |
| `dist/site-data.js` | Team names, biographies, qualifications and enquiry contact details |
| `dist/courses.js` | Course titles, categories, short descriptions and suggested learning stages |
| `dist/app.js` | Page content, search, filters, dialogs and email-draft behaviour |
| `dist/styles.css` | Colours, typography, spacing and responsive layouts |
| `dist/index.html` | Common header, footer, metadata and script loading |
| `dist/assets/` | Original logos and the generated workshop concept image |
| `docs/DEVELOPMENT_PLAN.md` | Prioritised development roadmap and completion criteria |
| `docs/DEPLOYMENT.md` | Server deployment, GitHub handover and rollback instructions |

Keep course IDs unique. Add only verified public information. Do not place CVs, detailed course brochures, credentials or customer records in `dist/`. Every file in `dist/` is potentially public on your server.

Ashok Heeramun is listed as Founder & Director, with his MBA qualification and biography adapted from the supplied executive profile. Team images currently use initials. Anjili remains the main enquiry contact.

## Deploy to your server

Upload the **contents** of `dist/` into the website document root. The public root should contain `index.html`, `styles.css`, `app.js`, `courses.js`, `site-data.js` and `assets/`.

Do not upload the source repository, `docs/`, `.git`, `.openai`, original CVs or development scripts to the public website. The site uses hash navigation such as `/#courses`, so this release does not need a special server rewrite rule.

Read [the deployment guide](docs/DEPLOYMENT.md) before replacing an existing website. The hosting account, domain, document root and deployment access still need to be confirmed.

## Prepare release packages

Python 3 is needed only to create ZIP packages; it is not required on the web server.

```sh
python scripts/package.py --output releases/v1.2.0
```

This creates:

- `broadmind-server-files-v1.2.0.zip`: public website files, with `index.html` at the ZIP root.
- `broadmind-source-v1.2.0.zip`: editable source, checks and documentation for GitHub.
- `checksums.json`: SHA256 hashes of the ZIP files.

Use a new output folder when packaging again; the script does not overwrite an existing release. For a subsequent formal release, update the version in `package.json`; the ZIP filenames are generated from it.

The source export deliberately excludes local Git history, Sites project metadata, working notes and private reference documents. It can be used to initialise a clean GitHub repository. Keep the working project's `.openai/hosting.json` locally if continuing to maintain its separate Sites review copy.

## Current functional limits

- Enquiry and outline-request forms prepare an email in the visitor's mail application. They do not submit enquiries to a server or send brochures automatically.
- No session dates or prices have been confirmed or published.
- There is no CMS, booking database, payment processing, learner login or analytics service.
- Navigation uses URL fragments. Separate crawlable page URLs and pre-rendered content are a priority before investing in search-led marketing.
- The workshop image is generated concept photography, not a photograph of Broadmind staff or premises. See [asset notes](docs/ASSETS.md).

## Ownership and access

The repository should be owned by your GitHub account or business organisation. An existing repository must be inspected before any upload; never replace unrelated contents or force-push its history. A new business repository should begin private unless you choose otherwise.

No open-source licence is granted by this package. Publishing a repository publicly is a separate choice from making the website public. Hosting credentials belong in a secure deployment configuration, never in website files or Git history.
