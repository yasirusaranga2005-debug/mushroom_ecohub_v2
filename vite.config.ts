import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';
  return {
    plugins: [
      react(),
      tailwindcss(),
      // basicSsl is only needed in dev mode (local HTTPS).
      // Cloudflare Pages provides its own HTTPS in production.
      ...(isDev ? [basicSsl()] : []),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
