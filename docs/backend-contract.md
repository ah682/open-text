# Presentation content contract

The [JSON Schema](../schema/site-content.schema.json) and
[example payload](../data/site-content.example.json) describe the homepage content.
The page currently keeps its content in HTML and JavaScript and does not load this
JSON at runtime.

The contract covers:

- page metadata and locale;
- navigation labels and links;
- hero, capability, product, news and customer-story cards;
- metrics and testimonials;
- local image references;
- footer and legal links.

## Adding a content import

A build-time adapter could validate an exported JSON document against the schema,
then render the fields into the existing components. Keep credentials and CMS
connection details in the build environment, and include only public content in
the generated site.

## Browser setup

The Content Security Policy blocks API requests with `connect-src 'none'`. Images,
fonts, CSS and JavaScript are served locally. Search uses an in-memory index;
OpenText destination links open the public website.
