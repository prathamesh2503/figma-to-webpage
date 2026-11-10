import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/figma-to-webpage/',
  plugins: [
    tailwindcss(),
  ],
})
