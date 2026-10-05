# Broadmind server deployment and GitHub handover

Prepared on 5 October 2026. This guide covers transferring the approved website to your own server and retaining its editable source in [rdevdass/broadmind-website](https://github.com/rdevdass/broadmind-website), the repository designated by the owner. The production domain, server and deployment access still need to be provided.

## Information needed to complete the transfer

| Item | Required detail |
| --- | --- |
| Public address | Exact domain, and whether to use the root domain, `www`, or another subdomain |
| Hosting | Provider and control panel, or server type and operating system |
| Website location | The confirmed document root for this domain |
| Existing site | Whether another website currently occupies that location |
| Access | An authenticated hosting session or a securely configured deployment connection |
| GitHub | Confirmed destination: `https://github.com/rdevdass/broadmind-website` |
| Team photographs | Optional approved portraits; all three biographies are now included |

Do not send passwords or private keys in chat. Sign in through your hosting provider's normal interface or use an existing secure deployment connection.

## What the server needs

This release is a static HTML, CSS and JavaScript website. The production server only needs to serve ordinary website files over HTTPS. It does not need Node.js, Python, PHP or a database to run this release.

The site has no ChatGPT login requirement when hosted on your own server. The existing ChatGPT sign-in belongs to the separate private review host, not to these website files.

Upload the contents of the server ZIP, not the ZIP file itself as the homepage, and not an extra parent `dist` directory unless that is the configured document root.

```text
your-confirmed-document-root/
  index.html
  styles.css
  app.js
  courses.js
  site-data.js
  assets/
    broadmind-logo.png
    broadmind-logo-white.png
    training-workshop.png
```

## Deployment sequence

1. Identify the correct domain and document root. Inspect the current server contents before uploading.
2. Save a dated backup of any existing website and its relevant configuration. Retain its restore location.
3. Upload the new release to a staging location or separate release directory. Do not overwrite the current site while inspecting it.
4. Check the homepage, all three profiles, course search, course dialogs, contact details, mobile navigation and privacy information. Check that images and scripts load without errors.
5. Confirm that HTTPS works on the intended public address. If DNS changes are needed, update only the website records involved and preserve business email records.
6. Switch the domain's document root or replace the website files using the host's supported deployment method. Preserve unrelated server files and configuration.
7. Check the actual public address from an unauthenticated session. Confirm there is no ChatGPT sign-in screen on the user's server.
8. Record the release version, Git commit, server location and backup location. Retain the previous release for rollback.

The exact upload and switch method depends on the server. cPanel and Plesk commonly provide file management and domain settings; a managed VPS may use SFTP or a server deployment process. Configure the chosen method after inspecting the actual hosting environment.

## GitHub handover

The source ZIP contains the portable project. The server ZIP alone is sufficient to serve the site, but the complete source ZIP is the correct starting point for maintenance.

For an existing repository, inspect its branch, files and history first. Add the site on a branch when appropriate, preserving existing material. For a new repository, create it in the user's account or business organisation, private by default, and upload the source with an initial commit.

The source ZIP excludes `.git/`, `.openai/`, original CVs, local working notes and release ZIPs. The existing private Sites review copy has a separate source destination; never overwrite that destination accidentally when setting up GitHub.

Recommended maintenance routine:

1. Make each change on a short-lived branch.
2. Run `node scripts/check.mjs` and review the affected pages locally.
3. Review the change in GitHub, then merge it into the main branch.
4. Package the exact approved source and deploy that release.
5. Tag formal releases and record what was deployed.

Automated deployment can be added once the server and access method are known. Keep credentials in the repository's deployment secret configuration, not in its source. GitHub supports deployment environments and gates, but availability depends on repository visibility and account plan; select the simplest supported setup for this repository. [GitHub deployment documentation](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments).

## Rollback

If a new release causes a material problem, restore the previous verified release or switch the document root back to it using the hosting provider's supported method. Recheck the public address and enquiry links. Correct the source in GitHub before attempting another release.

## Limits to communicate at launch

Enquiry forms currently create email drafts. They do not send brochures automatically. The calendar awaits confirmed sessions. No payment collection, accounts, analytics or customer database is included. These are the next development stages, not completed features.
