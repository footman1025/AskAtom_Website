import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Root base so /projects/automation and the other section URLs load assets from the site root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
