import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: './', // ←★これを追加
  plugins: [react()],
  logLevel: 'info',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'docs',
  },
  base: '/check-map-app/', // ✅ ←これを追加（プロジェクト名に合わせて）
});
