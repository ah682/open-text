# OpenText UK homepage recreation

A recreation of the OpenText UK homepage using HTML, CSS and vanilla JavaScript.
It includes responsive navigation, local search, capability and product sections,
customer stories, news and testimonials.

## Run locally

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000`. There are no dependencies to install or build steps
to run. Keep `index.html`, `styles.css`, `script.js` and `assets/` together when
serving the site.

## How it works

Content is stored locally, and search uses an in-memory index. Links to OpenText
pages open the public website. The page uses `noindex, nofollow` and a Content
Security Policy that blocks API requests and form submissions.

The [content contract](docs/backend-contract.md) describes the JSON format for a
future build-time content import. The example payload and schema are included;
the page does not load them at runtime. [Security notes](SECURITY.md) explain the
current browser restrictions.

After changing JavaScript, run `node --check script.js`, then check navigation,
search, dialogs and the mobile layout in a browser.

OpenText branding and the reference images belong to their respective owners.
