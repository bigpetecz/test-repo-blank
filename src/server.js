import { createServer } from 'node:http';

export function createApp() {
  return createServer((request, response) => {
    const isHealth = request.method === 'GET' && request.url === '/health';
    const isVersion = request.method === 'GET' && request.url === '/version';

    if (isHealth || isVersion) {
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(JSON.stringify(isHealth ? { status: 'ok' } : { version: '1' }));
    } else {
      response.writeHead(404, { 'content-type': 'application/json' });
      response.end(JSON.stringify({ error: 'not found' }));
    }
  });
}
