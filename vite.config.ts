import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/check-map-app/', // GitHub Pages用パス
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'CHECK MAP',
        short_name: 'CHECK MAP',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ff0000',
        icons: [
          {
            src: 'icons/icon-192.png', // ← 修正済み
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png', // ← 修正済み
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'docs',
  },
});