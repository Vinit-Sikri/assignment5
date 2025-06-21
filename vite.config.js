import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/shazam': {
        target: 'https://shazam-core.p.rapidapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/shazam/, ''),
        headers: {
          'X-RapidAPI-Key': process.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
          'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
        },
      },
    },
  },
});
console.log("API Key:", process.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
