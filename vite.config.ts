import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@app': path.resolve('./src/app'),
      '@pages': path.resolve('./src/pages'),
      '@widgets': path.resolve('./src/widgets'),
      '@features': path.resolve('./src/features'),
      '@entities': path.resolve('./src/entities'),
      '@shared': path.resolve('./src/shared'),
    },
  },
  define: {
    'process.env': { ...process.env, VITE_GITHUB_TOKEN: process.env.VITE_GITHUB_TOKEN },
  }
});