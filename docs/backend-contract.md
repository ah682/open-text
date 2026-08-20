# Presentation content contract

This repository is deliberately static. The “backend” deliverable is the content contract in [`schema/site-content.schema.json`](../schema/site-content.schema.json), accompanied by the safe example payload in [`data/site-content.example.json`](../data/site-content.example.json).

The contract models only public presentation content:

- page metadata and locale;
- navigation labels and public links;
- hero, capability, product, news and customer-story cards;
- public metrics and testimonial copy;
- local image references; and
- footer and legal links.

It intentionally does **not** model production infrastructure, CMS identifiers, API routes, authentication, roles, customer records, analytics, cookies, internal hostnames, persistence, environment variables, keys, tokens or secrets.

## Suggested future adapter

A future content adapter can validate an exported JSON document against the schema, then render the same fields into the existing static components at build time. Keep that adapter outside the browser bundle and emit only validated public content. The current shareholder presentation does not need or call such an adapter.

## Security boundary

The browser document declares a restrictive Content Security Policy. `connect-src 'none'` prevents runtime API and telemetry requests; images, fonts, CSS and JavaScript are served locally. Search runs against a small in-memory public index, and all destination links are normal public OpenText URLs opened with `noopener noreferrer`.
