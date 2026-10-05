# Broadmind website development plan

Prepared for Dev Ramasawmy on 5 October 2026.

Broadmind's new website is now publicly hosted in the business's Azure account at https://www.broadmind.mu and https://broadmind.mu, with source code and automatic publishing in its GitHub repository. The next priority is to turn the website into a dependable source of course enquiries and registrations. Preserve the logo and approved design while adding capabilities in stages.

## Current position

**Available:** responsive website; 36 searchable course overviews; five subject areas; four suggested learning pathways; company information; Dev, Anjili and Ashok listed in the leadership section; email and telephone links; course-outline request dialogs; FAQ and privacy information.

**Launch completed on 5 October 2026:** source is saved in `https://github.com/rdevdass/broadmind-website`; GitHub publishes checked website changes to the existing Azure Static Web App `broadmind-website`. Both public domains were verified over HTTPS against the deployed source. A local snapshot of the previous public test pages and a launch record are saved in `Website Handover`. Ashok's approved biography is included without the Oregon Consulting reference.

**Still to complete:** approved team photographs; confirmed session dates, prices and arrangements; automatic enquiry handling; automatic course-brochure delivery; search-friendly individual pages; content editing tools; registrations and payments. Separately, confirm the Azure subscription has moved beyond its trial before the trial expires; the website's Free hosting plan and the account subscription are distinct.

The present forms open an email draft. The training calendar currently states that no confirmed dates are displayed. These limits should remain explicit until the corresponding services are implemented.

## Recommended order

| Phase | Business outcome | Main work | Completion evidence |
| --- | --- | --- | --- |
| 1. Ownership and launch — completed | A public website controlled by Broadmind | Three leadership profiles published; existing Azure hosting connected; HTTPS and both domains checked; source and automated publishing in the user's GitHub; previous public test pages backed up | Both domains serve the new site without a ChatGPT login; deployment run 37282414856 succeeded for commit 81716d9; launch record retained locally |
| 2. Enquiries and brochures | Visitors can request information without needing an email application | Add secure form handling, an enquiry record, automatic brochure email, internal notification and delivery tracking | A test visitor receives the correct brochure; the team receives the enquiry; failures are visible and can be retried |
| 3. Content and search | Staff can keep information current and courses can be discovered directly | Give courses their own URLs and pre-rendered pages; add an editor; publish confirmed calendar sessions; improve page metadata and image delivery | A staff member updates a course and date without changing code; course URLs work directly and are crawlable |
| 4. Registrations and payments | Visitors can book a real scheduled session | Add registration, capacity management, confirmation emails, cancellation handling and an agreed payment/invoicing route | A registration produces a reliable record and confirmation; duplicate and failed payments are handled correctly if payments are enabled |
| 5. Follow-up and reporting | Broadmind understands which enquiries become business | Add CRM integration, enquiry ownership, campaign attribution, useful reporting and approved follow-up preferences | The team can follow an enquiry from source through response to registration and measure results |
| 6. Learning services | Support participants beyond a single booking | Consider a participant portal, course materials, attendance, feedback and certificates | A justified pilot works for a real course and the team can operate it without excessive administration |

Phases are sequencing recommendations, not fixed calendar commitments. Hosting access, content readiness and selected services determine delivery timing. Do not commission every phase at once.

## Phase 1 details

The controlled transfer is complete. The production source checkout is `broadmind-github`; see `docs/DEPLOYMENT.md` for the Azure workflow and rollback procedure. Review future website changes before merging into `main`, because relevant changes on that branch publish automatically after checks pass. The separate ChatGPT Sites review copy does not update automatically with Azure.

Use initials until approved portraits are available. Replace the generated workshop concept image with genuine Broadmind photography when suitable images are ready. Verify any claims about course approval, CPD, fees or eligibility for each session before publishing them.

The public addresses, repository, server upload package, deployment procedure and snapshot of the previous public test pages have been delivered. The current site is live as an information website with its email-draft forms clearly described.

## Phase 2 details

This is the highest-priority functional improvement because it directly supports the requested course-content email journey.

The visitor selects a course, enters the required contact details and requests its outline. The server validates the request, records only the information needed, sends the correct brochure and notifies the team. A confirmation page must reflect the real submission status, not merely a button click.

Use a course-to-brochure mapping maintained by the team. Store restricted brochures outside the public website folder. Decide whether the email should include an attachment or a time-limited download link; do not put protected course content behind a browser-only form while leaving a permanent public file URL accessible.

Include delivery failure handling, duplicate-request handling, spam protection and a straightforward process for removing or correcting enquiry information. Keep brochure-request consent separate from any optional marketing subscription. Set access, retention and privacy wording according to the actual services chosen.

Choose a backend and email delivery service compatible with the confirmed Azure hosting. Confirm costs, sender-domain authentication and storage requirements before implementation. The user-facing design does not need a full rebuild solely to add enquiry handling.

## Phase 3 details

Give each course a stable URL, such as `/courses/excel-for-accountants/`, with useful content present in the page response. The current `/#courses` navigation is suitable for the prototype but is not the preferred long-term structure for search discovery. Google recommends real URL paths rather than fragments for loading distinct content. [Google's JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

Add unique page titles and descriptions, a sitemap, correct canonical URLs, useful social sharing information and appropriate course information. Only publish structured data that matches real, visible facts. Search visibility is an improvement target, not a promise of rankings.

Introduce a modest content editor for course descriptions, brochure versions, trainer profiles and scheduled sessions. Include draft and publish states so unfinished changes do not become public. Keep courses separate from sessions: a course is the offering; a session has a particular date, venue, fee, delivery format and capacity.

Optimise image formats and loading while preserving visual quality. Check keyboard navigation, contrast, form errors and phone layouts whenever templates change.

## Phase 4 details

Start with registration requests if the team is not ready to take payment online. Add payments only after confirming fees, currency, settlement account, booking terms, refund handling and the chosen provider.

Maintain one reliable registration record per participant and session. Consider company group bookings, invoices or pro forma invoices, waitlists and transfers between sessions if they match actual operations. Payment success must be verified by the server; a browser redirect alone must not mark an order paid.

The acceptance check should cover a successful registration, full session, duplicate submission, failed payment and cancellation. Use the selected provider's test environment before enabling real payments.

## Phase 5 details

Track a small set of useful measures: course enquiries, valid brochure requests, response time, registrations, enquiry-to-registration conversion, and the sources producing relevant leads. Establish the baseline first, then agree targets from observed results.

Connect the CRM and email platform that the business actually uses, rather than adding disconnected systems. Make responsibility for responding to each enquiry visible. Send follow-up campaigns only to the intended recipients under the chosen communication preferences.

## Phase 6 details

A learner portal is optional. Add it only when repeat participants, online learning or administration volume justify it. Possible functions include course materials, attendance records, feedback, certificates and corporate learning histories. Evaluate an existing learning platform before building a custom one.

An AI course adviser is also optional. If introduced, it should answer from approved course information and pass uncertain questions to the team. It must not invent session dates, prices, accreditation or tax/legal advice.

## Decisions and responsibilities

| Responsibility | Suggested owner |
| --- | --- |
| Business priorities, repository ownership and launch decisions | Dev or the designated business owner |
| Course facts, dates, fees, brochures and operational responses | Anjili or the designated course coordinator |
| Personal biography and photograph approval | Each founder/director |
| Implementation, deployment, tests and restore procedure | Website developer / hosting administrator |
| Ongoing content checks and lead follow-up | Named Broadmind administrator |

These are suggested responsibilities, to be confirmed by the business. A named owner for course updates and enquiries is more valuable than adding features without an operating process.

## Budget and maintenance

The current site needs ordinary hosting and a domain. Later phases may add email delivery, data storage, a content editor, backups, monitoring, CRM subscriptions, payment transaction fees or a learning platform. Obtain current quotations after choosing providers and expected volumes; no third-party purchase or subscription is included in this plan.

Maintain source in GitHub. Review changes, run checks, preview affected pages and deploy a recorded release. Start with manual deployments if that matches the host; add automatic deployments once the process is reliable. GitHub can support deployment environments and gates subject to plan availability. [GitHub deployment guidance](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments).

After launch, review enquiries and course information weekly, operational performance monthly, and development priorities quarterly. These are recommended routines; no recurring automation has been created.

## Next concrete actions

1. Provide the server/domain details so the public launch can be completed; the GitHub destination is confirmed.
2. Review the three leadership biographies and supply any approved portraits.
3. Confirm the first set of scheduled sessions, fees and brochure versions.
4. Choose and implement the automatic enquiry and brochure-email process.
5. Upgrade course URLs and content management before investing heavily in marketing.
