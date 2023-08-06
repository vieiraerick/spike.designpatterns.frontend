import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        preconnect: false,
        display: 'block',
        families: [
          {
            name: 'Montserrat',
            styles: 'wght@0,300;1,400;2,600;3,700'
          },
          {
            name: 'Inter',
            styles: 'wght@0,300;1,400;2,600;3,700'
          }
        ]
      }
    })
  ],
})
