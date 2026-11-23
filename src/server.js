import { createServer } from 'node:http';

export function createApp() {
  return createServer((request, response) => {
    const healthy = request.method === 'GET' && request.url === '/health';
    response.writeHead(healthy ? 200 : 404, { 'content-type': 'application/json' });
    response.end(JSON.stringify(healthy ? { status: 'ok' } : { error: 'not found' }));
  });
}
