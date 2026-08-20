# Security notes

This is a static presentation repository. It accepts no user data, sets no cookies, performs no fetch/XHR requests and contains no authentication or persistence layer.

Do not add production credentials, private CMS exports, customer data, analytics identifiers, environment files or internal endpoint details. If the presentation later receives build-time content, validate it against `schema/site-content.schema.json` and commit only the public output.

The browser Content Security Policy intentionally uses `connect-src 'none'` and `form-action 'none'`. Treat any relaxation of those directives as a security-sensitive review.
