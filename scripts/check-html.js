#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, '..', 'index.html');

const html = fs.readFileSync(htmlPath, 'utf8');

const requiredSnippets = [
  'id="webchat"',
  'id="webchat-status"',
  'renderWebChat',
  'Connecting to the assistant…'
];

const missing = requiredSnippets.filter((snippet) => !html.includes(snippet));

if (missing.length) {
  console.error('HTML validation failed. Missing snippets:', missing.join(', '));
  process.exit(1);
}

console.log('HTML validation passed.');
