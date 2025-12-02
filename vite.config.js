import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/advent-of-code-2025/',
  plugins: [
    tailwindcss(),
  ],
})
