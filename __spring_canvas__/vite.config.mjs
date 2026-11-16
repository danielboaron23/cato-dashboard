import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

const lightPreview = {
  name: 'spring-light-scheme',
  transformIndexHtml() {
    return [{ tag: 'style', injectTo: 'head', children: 'html:root{color-scheme:light;color:#213547;background-color:#ffffff}html button{background-color:#f9f9f9}' }]
  },
}

export default defineConfig({
  root: process.cwd(),
  plugins: [react(), lightPreview],
  resolve: { alias: { '@myop/react': path.resolve(process.cwd(), '__spring_canvas__/myop-stub.js') } },
  esbuild: { tsconfigRaw: { compilerOptions: { verbatimModuleSyntax: false, useDefineForClassFields: true, jsx: 'react-jsx' } } },
})
