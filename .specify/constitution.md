# Repository Governance

- Use JavaScript ES modules and Node.js built-ins for the backend.
- Put implementation under `src/` and use `node:test` under `tests/`.
- Run `npm test` and `npm run lint`. Treat ESLint warnings as errors.
- Add dependencies and change the lockfile only when both changes are authorized by factory policy.
- Keep network access out of tests. Exercise HTTP handlers without binding a socket.
