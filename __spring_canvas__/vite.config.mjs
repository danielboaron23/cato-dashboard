import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: process.cwd(),
  plugins: [react()],
  esbuild: { tsconfigRaw: { compilerOptions: { verbatimModuleSyntax: false, useDefineForClassFields: true, jsx: 'react-jsx' } } },
})
