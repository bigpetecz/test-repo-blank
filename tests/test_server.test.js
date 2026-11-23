import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createApp } from '../src/server.js';

function send(method, url) {
  const result = {};
  createApp().emit('request', { method, url }, {
    writeHead(status, headers) {
      result.status = status;
      result.headers = headers;
    },
    end(body) {
      result.body = JSON.parse(body);
    },
  });
  return result;
}

test('GET /health reports service health', () => {
  assert.deepEqual(send('GET', '/health'), {
    status: 200,
    headers: { 'content-type': 'application/json' },
    body: { status: 'ok' },
  });
});

test('unknown paths and unsupported methods return 404', () => {
  assert.equal(send('GET', '/missing').status, 404);
  assert.equal(send('POST', '/health').status, 404);
});
