import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/profile/', // 👈 Must match your repo name
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
