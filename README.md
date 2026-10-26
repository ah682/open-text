# OpenText UK homepage recreation

A static frontend portfolio recreation of the OpenText UK homepage. HTML, CSS and
vanilla JavaScript implement responsive navigation, local search and presentation
sections for capabilities, customer stories, news and testimonials. It is an
independent implementation study, not an official OpenText property or client claim.

## Run locally

No dependency installation or build step is required:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000`. Serve `index.html`, `styles.css`, `script.js` and
`assets/` together. Public OpenText links navigate away from the demo.

## Data boundary and status

Content is a local presentation snapshot, not a connected CMS. The page declares
`noindex, nofollow` and a Content Security Policy with `connect-src 'none'`; search
uses an in-memory index and no production API or analytics is integrated. The
[example content contract](docs/backend-contract.md), JSON payload and schema are
for a possible build-time adapter, not an implemented backend. See [SECURITY.md](SECURITY.md).

This is a static demonstration. Run `node --check script.js` after JavaScript changes,
then inspect keyboard navigation, search, dialogs and mobile layout in a browser.
No automated test/build command is configured; historical checks are not evidence
of a currently verified deployment.

OpenText names and identity, customer logos, photographs and other reference assets
retain their respective owners' rights. Included local assets do not establish a
right to redistribute them or imply customer relationships. Review source terms
before reuse; this README adds no licence grant.
