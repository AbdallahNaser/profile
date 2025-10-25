import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/profile/', // 👈 this MUST match your repo name
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
