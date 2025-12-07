import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
      // 1. This tells Vite your site lives in a subfolder on GitHub
      base: "/microsite/", 
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      
      // 2. We REMOVED the "define" block that asked for API keys
      
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
