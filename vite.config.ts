import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths, so the same build works at a domain root or under
  // a sub-path such as GitHub Pages' /india-reserved/
  base: './',
  plugins: [react(), tailwindcss()],
})
