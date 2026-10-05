const courses = window.BROADMIND_COURSES;
const subjects = [
  {name:'Excel',colour:'#19734f',description:'From everyday spreadsheets to advanced analysis. Make your data work for you.'},
  {name:'Power BI',colour:'#966500',description:'Turn information into clear visual stories and more informed business decisions.'},
  {name:'Taxation',colour:'#006c9e',description:'Build practical confidence in personal, corporate and cross-border taxation.'},
  {name:'Legal compliance',colour:'#b30a66',description:'Understand workplace obligations and apply them with greater confidence.'},
  {name:'Accounting & finance',colour:'#b44623',description:'Strengthen financial skills, from your first accounting role to planning, valuation and cash flow.'}
];
const main = document.querySelector('main');
const contact = window.BROADMIND_SITE.contact;
let activeCategory = 'All courses';
let searchTerm = '';
let activeLevel = '';
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const subjectColour = category => subjects.find(item => item.name === category)?.colour || '#17684f';
const courseById = id => courses.find(course => course.id === id);
const arrow = '<span aria-hidden="true">↗</span>';
const button = (label,href,extra='') => `<a class="button ${extra}" href="${href}">${label}${arrow}</a>`;
const courseCard = course => `<article class="course-card" style="--accent:${subjectColour(course.category)}"><span class="category-label">${esc(course.category)}</span><h3>${esc(course.title)}</h3><p>${esc(course.description)}</p><div class="card-footer"><span class="level">${esc(course.level)}</span><button class="course-open" data-course="${course.id}" aria-label="Explore ${esc(course.title)}">Explore course ↗</button></div></article>`;
const pageHero = (name,title,description) => `<section class="page-hero"><div class="wrap"><div class="breadcrumb"><a href="#home">Home</a><span aria-hidden="true">/</span><span>${name}</span></div><h1>${title}</h1><p>${description}</p></div></section>`;
const cta = () => `<div class="wrap"><section class="cta-panel"><div><h2>What would you like to learn next?</h2><p>Let’s find the right course or training approach for you.</p></div>${button('Talk to Broadmind','#contact','green')}</section></div>`;

function homePage(){
return `<section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><p class="eyebrow">Knowledge you can put to work</p><h1>Practical learning.<br><em>Lasting confidence.</em></h1><p>Professional training that connects knowledge with the work you do. Build your skills in finance, tax, law and data, here in Mauritius.</p><div class="actions">${button('Explore our courses','#courses')}${button('Training for your team','#contact','secondary')}</div><div class="hero-note"><span></span>For professionals, teams and growing businesses.</div></div><div class="hero-visual"><img src="assets/training-workshop.png" width="1536" height="1024" alt="Illustrative corporate workshop with professionals learning together" fetchpriority="high"><div class="image-caption"><span class="caption-mark" aria-hidden="true">↗</span><div><strong>Built around the way you work.</strong><small>Relevant knowledge. Practical application.</small></div></div></div></div></section>
<div class="subject-strip"><div class="wrap"><span class="label">FIND YOUR FOCUS</span>${subjects.map(s=>`<a href="#courses/${encodeURIComponent(s.name)}"><span class="dot" style="--accent:${s.colour}"></span>${esc(s.name)}</a>`).join('')}</div></div>
<section class="section"><div class="wrap"><div class="section-head"><div><p class="eyebrow">Your next step starts here</p><h2>One ambition. Many ways to grow.</h2></div><p>Choose the knowledge that moves you forward, whether you’re building a foundation or deepening your expertise.</p></div><div class="domains">${subjects.map((s,i)=>`<a class="domain" style="--accent:${s.colour}" href="#courses/${encodeURIComponent(s.name)}"><span class="domain-number">0${i+1}</span><div><h3>${esc(s.name)}</h3><p>${s.description}</p></div><span class="circle-arrow" aria-hidden="true">↗</span></a>`).join('')}</div></div></section>
<section class="section pale"><div class="wrap"><div class="section-head"><div><p class="eyebrow">A few places to begin</p><h2>Learning for real work.</h2></div><a class="text-link" href="#courses">Explore all courses ${arrow}</a></div><div class="course-grid">${['excel-accountants','vat','powerbi-intro'].map(id=>courseCard(courseById(id))).join('')}</div></div></section>
<section class="section approach"><div class="wrap approach-grid"><div class="approach-intro"><p class="eyebrow">The Broadmind approach</p><h2>Understanding is only<br>the beginning.</h2><p>The real value of learning is what you can do with it. We connect professional knowledge with practical situations, so you can take your next step with confidence.</p><a class="text-link" href="#about">Get to know Broadmind ${arrow}</a></div><div><div class="approach-step"><span class="step-no">01</span><div><h3>Start with your working world</h3><p>Training shaped around the questions, responsibilities and challenges professionals face.</p></div></div><div class="approach-step"><span class="step-no">02</span><div><h3>Connect theory with practice</h3><p>Explore concepts through examples and case studies that make the learning tangible.</p></div></div><div class="approach-step"><span class="step-no">03</span><div><h3>Take the knowledge forward</h3><p>Develop skills and understanding you can bring back to your role and your team.</p></div></div></div></div></section>
<section class="section"><div class="wrap team-callout"><div class="path-art"><p>A pathway, built around you</p><div class="path-row"><b>01</b>Build a strong foundation <span>↗</span></div><div class="path-row"><b>02</b>Put your skills into practice <span>↗</span></div><div class="path-row"><b>03</b>Deepen your expertise <span>↗</span></div></div><div><p class="eyebrow">Make your learning count</p><h2>A clear direction.<br>Your own pace.</h2><p class="muted">A single course can solve today’s challenge. A thoughtful learning pathway can prepare you for what comes next. Explore suggested routes through our course areas.</p><a class="text-link" href="#pathways">Find your training pathway ${arrow}</a></div></div></section>${cta()}`;
}

function coursesPage(category){
  activeCategory=subjects.some(s=>s.name===category)?category:'All courses';searchTerm='';activeLevel='';
  return `${pageHero('Courses','Find the knowledge you need.','Explore practical courses across five areas of professional development. Start with a subject, a skill or a challenge you want to solve.')}<section class="section catalogue"><div class="wrap"><div class="search-row"><div class="field"><label for="course-search">What would you like to learn?</label><input id="course-search" type="search" placeholder="Search Excel, VAT, cash flow…" autocomplete="off"></div><div class="field"><label for="course-level">Your learning focus</label><select id="course-level"><option value="">All learning stages</option><option>Getting started</option><option>Building expertise</option><option>Professional practice</option></select></div></div><div class="filters" aria-label="Filter courses by subject">${['All courses',...subjects.map(s=>s.name)].map(s=>`<button class="filter" data-category="${esc(s)}" aria-pressed="${s===activeCategory}">${esc(s)}</button>`).join('')}</div><p class="results-count" id="results-count" role="status" aria-live="polite"></p><div class="course-grid" id="course-results"></div><div class="note-box">Course dates, fees, delivery arrangements and any approval or CPD details are confirmed for each session. Request the course information before making your booking.</div></div></section>${cta()}`;
}

function filterCourses(){
 const matches=courses.filter(c=>(activeCategory==='All courses'||c.category===activeCategory)&&(!activeLevel||c.level===activeLevel)&&(`${c.title} ${c.description} ${c.category}`.toLowerCase().includes(searchTerm.toLowerCase())));
 document.querySelector('#results-count').textContent=`${matches.length} ${matches.length===1?'course':'courses'}${activeCategory==='All courses'?' across all subjects':` in ${activeCategory}`}`;
 document.querySelector('#course-results').innerHTML=matches.length?matches.map(courseCard).join(''):'<div class="empty-state"><h3>No courses match your search.</h3><p>Try a broader phrase or clear your filters to explore the full catalogue.</p><button class="button secondary" id="reset-filters">Clear filters</button></div>';
 document.querySelectorAll('.filter').forEach(el=>el.setAttribute('aria-pressed',el.dataset.category===activeCategory));
}

function pathwaysPage(){
 const paths=[
 ['Work smarter with data','From spreadsheet confidence to useful business insights.',['excel-beginners','advanced-excel','power-query','powerbi-intro']],
 ['Build your finance toolkit','Connect reporting with planning and business decisions.',['campus-career','excel-accountants','cash-flow','financial-modelling']],
 ['Strengthen tax knowledge','Develop a practical understanding of business tax responsibilities.',['small-business-tax','corporate-tax','vat','corporate-audit']],
 ['Support people and compliance','Bring greater clarity to HR, payroll and workplace responsibilities.',['tax-hr','paye-audit','gratuity','health-safety']]
 ];
 return `${pageHero('Training pathways','Learning with a direction.','Not sure where to start? These suggested routes connect related courses, helping you plan a next step that makes sense for your role.')}<section class="section"><div class="wrap"><div class="pathway-grid">${paths.map(([title,desc,ids],i)=>`<article class="pathway"><span class="pathway-label">Suggested pathway 0${i+1}</span><h2>${title}</h2><p>${desc}</p><ol>${ids.map(id=>`<li><button data-course="${id}">${esc(courseById(id).title)}</button></li>`).join('')}</ol><a class="text-link" href="#contact">Discuss this pathway ${arrow}</a></article>`).join('')}</div><div class="note-box">These are suggested learning routes, rather than formal qualifications or fixed course packages. We can help you choose courses based on your current knowledge, responsibilities and goals.</div></div></section>${cta()}`;
}

function calendarPage(){
 return `${pageHero('Training calendar','Make room for your next step.','Find the next opportunity to learn, or speak to us about training for your team.')}<section class="section"><div class="wrap calendar-layout"><div class="calendar-empty"><div class="calendar-icon" aria-hidden="true">···</div><p class="eyebrow">Upcoming training</p><h2>New dates will appear here.</h2><p>There are no confirmed session dates displayed at the moment. Tell us which course interests you and we’ll help you check the next available session.</p><div class="actions">${button('Ask about a course','#contact')}${button('Browse the courses','#courses','secondary')}</div></div><aside class="side-note"><h3>Planning for your team?</h3><p>Start with the skills your team needs. We can discuss a tailored training approach and confirm availability, format and fees with you.</p><a class="text-link" href="#contact">Discuss team training ${arrow}</a><hr style="border:0;border-top:1px solid #dce1e5;margin:30px 0"><h3>Before you book</h3><p>Ask for the course outline, prerequisites, dates, venue, fees and any applicable approval or CPD information for the specific session.</p></aside></div></section>${cta()}`;
}

function aboutPage(){
 return `${pageHero('About us','Knowledge that belongs in the real world.','Broadmind brings practical professional learning to individuals, teams and businesses in Mauritius.')}<section class="section"><div class="wrap"><div class="editorial-grid"><div><p class="eyebrow">Our story</p><h2>A practical purpose.<br>Since 2018.</h2></div><div><p class="lead">Education Consult Ltd was established in January 2018 and operates under the Broadmind brand.</p><p>Our focus is professional development that connects academic understanding with the realities of working life. Our training areas include data and technology, accounting and finance, taxation and legal compliance.</p><p>We bring professional experience and practical examples into the learning process, helping participants understand not only the subject, but how it relates to their work.</p><a class="text-link" href="#team">Meet our founders &amp; directors ${arrow}</a></div></div><div class="values"><div class="value"><h3>Relevant to your role</h3><p>We focus on the knowledge professionals need to understand their responsibilities and improve their work.</p></div><div class="value"><h3>Grounded in practice</h3><p>Examples and case studies help connect concepts with real business situations.</p></div><div class="value"><h3>Room to grow</h3><p>Courses and tailored training support different levels of knowledge and professional goals.</p></div></div></div></section>${cta()}`;
}

function teamPage(){
 const profiles=window.BROADMIND_SITE.team.map((person,index)=>`<article class="profile${index?' second-profile':''}${person.biography.length?'':' compact-profile'}"><div class="profile-monogram" style="background:${person.colour}" aria-hidden="true">${esc(person.initials)}</div><div><p class="eyebrow">${esc(person.heading)}</p><h2>${esc(person.name)}</h2>${person.qualifications?`<p class="role">${esc(person.qualifications)}</p>`:''}${person.biography.map(paragraph=>`<p>${esc(paragraph)}</p>`).join('')}${person.specialisms.length?`<div class="profile-tags">${person.specialisms.map(item=>`<span>${esc(item)}</span>`).join('')}</div>`:''}${person.email?`<div class="actions"><a class="text-link" href="mailto:${esc(person.email)}">${esc(person.contactLabel)} ${arrow}</a></div>`:''}</div></article>`).join('');
 return `${pageHero('Founders &amp; directors','The people behind Broadmind.','Professional experience, a practical perspective and a shared commitment to learning.')}<section class="section"><div class="wrap">${profiles}</div></section>${cta()}`;
}

function enquiryFields(prefix,courseTitle=''){
 return `<div class="form-grid"><div class="field"><label for="${prefix}-name">Your name *</label><input id="${prefix}-name" name="name" autocomplete="name" required maxlength="120"></div><div class="field"><label for="${prefix}-email">Email address *</label><input id="${prefix}-email" name="email" type="email" autocomplete="email" required maxlength="180"></div><div class="field"><label for="${prefix}-company">Company</label><input id="${prefix}-company" name="company" autocomplete="organization" maxlength="180"></div><div class="field"><label for="${prefix}-phone">Phone number</label><input id="${prefix}-phone" name="phone" type="tel" autocomplete="tel" maxlength="50"></div>${courseTitle?`<input name="course" type="hidden" value="${esc(courseTitle)}">`:`<div class="field full"><label for="${prefix}-interest">I’m interested in</label><select id="${prefix}-interest" name="interest"><option>Help choosing a course</option><option>Course dates and availability</option><option>Training for my team</option><option>A training pathway</option><option>Something else</option></select></div><div class="field full"><label for="${prefix}-message">Tell us a little about your training needs *</label><textarea id="${prefix}-message" name="message" required maxlength="2500" placeholder="The subject, your role, or the skills your team would like to build…"></textarea></div>`}</div><label class="check-field"><input type="checkbox" required><span>I agree to share these details with Broadmind when I send my email. <button class="text-button" type="button" data-privacy>Privacy information</button></span></label><button class="button" type="submit">Prepare email ${arrow}</button><p class="form-note">Opens your email application with a draft for you to review and send. Nothing is sent automatically.</p><p class="form-status" role="status" aria-live="polite"></p>`;
}

function contactPage(){
 return `${pageHero('Contact','Let’s talk about your next step.','A course for you, a pathway for your career, or practical training for your team. Tell us what you have in mind.')}<section class="section"><div class="wrap contact-layout"><div class="contact-details"><p class="eyebrow">Start a conversation</p><h2>We’re here to help you find the right fit.</h2><p>Contact Anjili or prepare an enquiry using the form. Include the course or subject that interests you and any questions about your training needs.</p><div class="contact-item"><small>Email Anjili</small><a href="mailto:${contact.email}">${contact.email}</a></div><div class="contact-item"><small>Call us</small><a href="tel:${contact.tel}">${contact.phone}</a></div><div class="contact-item"><small>Based in</small><span>Mauritius</span></div><div class="note-box">For a course enquiry, we can confirm availability, delivery format, fees and any relevant approval details.</div></div><form class="contact-form" data-enquiry>${enquiryFields('contact')}</form></div></section>`;
}

function faqPage(){
 const faqs=[
 ['How do I choose a course?','Start with a subject in the course catalogue, then explore the short overview. If you’re unsure about the right starting point, tell us about your role and current knowledge so we can help.'],
 ['Where can I find the detailed course content?','Open a course and choose to request its outline. The form prepares an email in your email application. Review and send it to Broadmind to request the detailed content.'],
 ['When is the next training session?','Check the training calendar or contact us about a specific course. Dates are displayed only when confirmed.'],
 ['Can you provide training for our team?','We can discuss tailored training around your team’s needs. Contact us with your subject area, group size and preferred timing so we can confirm the options.'],
 ['Are the courses eligible for a grant or CPD credit?','Approval, grant eligibility and CPD arrangements must be confirmed for the specific course and session. Ask us for the relevant information before booking.'],
 ['Are training pathways formal qualifications?','The pathways shown here are suggestions for connecting related courses. They are not formal qualifications, fixed packages or guarantees of accreditation.']
 ];
 return `${pageHero('Frequently asked questions','A little clarity before you begin.','Answers to common questions about choosing and arranging your training.')}<section class="section"><div class="wrap"><div class="faq-wrap">${faqs.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div></section>${cta()}`;
}

function render(){
 const parts=location.hash.slice(1).split('/');
 const page=parts[0]||'home';let category='';try{category=decodeURIComponent(parts.slice(1).join('/'));}catch{}
 const pages={home:homePage,courses:()=>coursesPage(category),pathways:pathwaysPage,calendar:calendarPage,about:aboutPage,team:teamPage,contact:contactPage,faq:faqPage};
 const title={home:'Practical learning. Lasting confidence.',courses:'Our courses',pathways:'Training pathways',calendar:'Training calendar',about:'About us',team:'Founders & directors',contact:'Contact us',faq:'Frequently asked questions'};
 if(!pages[page]){location.replace('#home');return;}
 main.innerHTML=pages[page]();
 document.title=`${title[page]} | Broadmind Corporate Training`;
 document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===`#${page}`)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.querySelector('nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');
 if(page==='courses')filterCourses();
 window.scrollTo(0,0);
}

function showCourse(id){
 const course=courseById(id);if(!course)return;
 document.querySelector('#dialog-content').innerHTML=`<p class="eyebrow" style="color:${subjectColour(course.category)}">${esc(course.category)}</p><h2 id="dialog-title">${esc(course.title)}</h2><p>${esc(course.description)}</p><div class="dialog-meta"><span>${esc(course.level)}</span><span>Dates &amp; fees on enquiry</span></div><form class="dialog-form" data-enquiry><h3>Request the detailed course outline</h3><p>Ask us for the content, prerequisites and arrangements for this course.</p>${enquiryFields('brochure',course.title)}</form>`;
 document.querySelector('#course-dialog').showModal();document.body.classList.add('modal-open');
}

document.addEventListener('click',event=>{
 if(event.target.closest('.skip-link')){event.preventDefault();main.focus();main.scrollIntoView();return;}
 const courseButton=event.target.closest('[data-course]');if(courseButton)showCourse(courseButton.dataset.course);
 const filterButton=event.target.closest('[data-category]');if(filterButton){activeCategory=filterButton.dataset.category;filterCourses();}
 if(event.target.closest('#reset-filters')){activeCategory='All courses';searchTerm='';activeLevel='';document.querySelector('#course-search').value='';document.querySelector('#course-level').value='';filterCourses();document.querySelector('#course-search').focus();}
 if(event.target.closest('[data-privacy]')){document.querySelector('#privacy-dialog').showModal();document.body.classList.add('modal-open');}
 const close=event.target.closest('.close-dialog,.privacy-done');if(close)close.closest('dialog').close();
 if(event.target.closest('.menu-toggle')){const expanded=document.querySelector('nav').classList.toggle('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded',expanded);}
});
document.addEventListener('input',event=>{if(event.target.id==='course-search'){searchTerm=event.target.value;filterCourses();}});
document.addEventListener('change',event=>{if(event.target.id==='course-level'){activeLevel=event.target.value;filterCourses();}});
document.addEventListener('submit',event=>{
 if(!event.target.matches('[data-enquiry]'))return;event.preventDefault();
 const form=event.target,data=new FormData(form);
 const subject=data.get('course')?`Course outline request: ${data.get('course')}`:`Training enquiry: ${data.get('interest')}`;
 const body=`Hello Broadmind,\n\n${data.get('course')?`Please send me the detailed outline and next available dates for ${data.get('course')}.`:(data.get('message')||'')}\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')||'Not provided'}\nPhone: ${data.get('phone')||'Not provided'}\n\nThank you.`;
 const href=`mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 const link=document.createElement('a');link.href=href;link.click();
 const status=form.querySelector('.form-status');status.replaceChildren();status.append('Your email draft is ready. Review and send it in your email application. If it did not open, ');const retry=document.createElement('a');retry.href=href;retry.textContent='open the draft again';retry.style.textDecoration='underline';status.append(retry);status.append(`, or email ${contact.email}.`);
});
document.querySelectorAll('dialog').forEach(dialog=>{
 dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('modal-open');});
 dialog.addEventListener('click',event=>{const r=dialog.getBoundingClientRect();if(event.target===dialog&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom))dialog.close();});
});
window.addEventListener('hashchange',()=>{document.querySelectorAll('dialog[open]').forEach(d=>d.close());render();main.focus({preventScroll:true});});
render();
