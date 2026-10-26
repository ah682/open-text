# Security notes

The page runs entirely in the browser. It makes no API requests, sets no cookies
and has no login or form submission service.

The Content Security Policy uses `connect-src 'none'` and `form-action 'none'` to
block API requests and form submissions. Review those settings when adding a
feature that needs network access.

For a future content import, validate the public output against
`schema/site-content.schema.json`. Keep credentials and private CMS data out of
the generated site.
