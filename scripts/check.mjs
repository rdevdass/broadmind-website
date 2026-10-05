import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const files=fs.readdirSync(dist).filter(name=>name.endsWith('.js'));
for(const file of files)new vm.Script(fs.readFileSync(path.join(dist,file),'utf8'),{filename:file});
const data=vm.createContext({window:{}});
for(const file of ['courses.js','site-data.js'])vm.runInContext(fs.readFileSync(path.join(dist,file),'utf8'),data,{timeout:1000});
const courses=data.window.BROADMIND_COURSES;
if(new Set(courses.map(c=>c.id)).size!==courses.length)throw Error('Course IDs must be unique.');
for(const course of courses)for(const key of ['id','category','title','description','level'])if(!course[key])throw Error(`Missing ${key} in course ${course.id}`);
const site=data.window.BROADMIND_SITE;
if(!site.contact.email||!site.contact.phone||!site.contact.tel)throw Error('Contact information is incomplete.');
for(const person of site.team){
  if(!person.name||!person.heading||!person.initials)throw Error('Each team member needs a name, title and initials.');
  if(!/^#[0-9a-f]{6}$/i.test(person.colour))throw Error(`Invalid colour for ${person.name}`);
  if(!Array.isArray(person.biography)||!Array.isArray(person.specialisms))throw Error(`Invalid profile lists for ${person.name}`);
}
const html=fs.readFileSync(path.join(dist,'index.html'),'utf8');
const app=fs.readFileSync(path.join(dist,'app.js'),'utf8');
for(const match of `${html}\n${app}`.matchAll(/(?:src|href)="([^"#?]+)"/g)){
  const value=match[1];if(value.includes(':')||value.includes('${'))continue;
  if(!fs.existsSync(path.join(dist,value)))throw Error(`Missing local asset: ${value}`);
}
for(const match of app.matchAll(/data-course="([a-z0-9-]+)"/g))if(!courses.some(c=>c.id===match[1]))throw Error(`Unknown course link ${match[1]}`);
console.log(`Checks passed: ${files.length} scripts, ${courses.length} courses, ${site.team.length} profiles and local asset references.`);
