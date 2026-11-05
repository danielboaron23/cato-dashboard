import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
const port = Number(process.env.PORT || 5173);
const stub = path.resolve(process.cwd(), '__spring_canvas__/myop-stub.js');
// Preview-only: the app's index.css follows the OS dark scheme but its pages are designed light.
const forceLight = {
  name: 'spring-force-light',
  transformIndexHtml: () => [{ tag: 'style', injectTo: 'head', children: ':root{color-scheme:light !important;color:#213547 !important;background-color:#f4f6f8 !important}button{background-color:#f9f9f9}' }],
};
const server = await createServer({
  configFile: false,
  plugins: [react(), forceLight],
  resolve: { alias: { '@myop/react': stub } },
  esbuild: { tsconfigRaw: { compilerOptions: { verbatimModuleSyntax: false, jsx: 'react-jsx' } } },
  server: { port, host: '127.0.0.1', strictPort: true },
});
await server.listen();
server.printUrls();
