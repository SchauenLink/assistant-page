# SchauenLink Assistant Page

This repository hosts the static client for the SchauenLink assistant powered by the Bot Framework Web Chat widget.

## Local development

The page requires a Direct Line token issued by the SchauenLink backend. By default the client requests a token from:

```
https://schauenlink.com/api/directline/token
```

For local development you can expose your own Direct Line endpoint by updating the fetch URL in `index.html` or by proxying the hosted API. Ensure the endpoint responds to a `POST` request with a JSON payload containing a `token` property:

```json
{ "token": "<DIRECT_LINE_TOKEN>" }
```

## Tests

Run the lightweight HTML validation script before committing to verify critical elements are present:

```bash
npm test
```

The same check runs automatically in CI before the site is deployed.
