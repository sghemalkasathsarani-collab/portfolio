import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
// Relative base so the build works on GitHub Pages whatever the repo is named
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
