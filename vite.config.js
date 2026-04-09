import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8000,
    host: true, // allow external access
    allowedHosts: [
      'blue-impala-12.loca.lt',
      'remarkable-sight-korea-subsequently.trycloudflare.com'
    ]
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
})
