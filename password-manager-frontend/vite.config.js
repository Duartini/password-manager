import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    hmr: {
      protocol: 'ws', // o 'wss' si estás usando HTTPS
      host: '172.28.0.2', // o la IP/hostname de tu servidor
    },
  },
});
