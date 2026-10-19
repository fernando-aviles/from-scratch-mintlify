# Relaybox Docs

Documentation for Relaybox, built with [Mintlify](https://mintlify.com).

## Local development

Install the Mintlify CLI and start the dev server from the repo root:

```bash
npm i -g mint
mint dev
```

The site runs at http://localhost:3000.

## Project structure

```
docs.json                 # Site config. Navigation and redirects are pulled in with $ref
config/
  navigation.json         # Tabs, menus, and global anchors
  navigation/             # One file per tab (some nest further $refs)
  redirects.json
snippets/
  components/             # React components (.jsx)
  data/                   # Shared data exported from MDX (plans, SDK versions, glossary…)
  shared/                 # Reusable MDX blocks, some of which take props
  code/                   # Reusable code samples
api-reference/
  openapi.yaml            # OpenAPI spec that powers the endpoint pages
images/
style.css
```

## Checks

```bash
mint broken-links
```
