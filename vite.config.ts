import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@emotion/react': path.resolve(
        './packages/component-package/node_modules/@emotion/react',
      ),
      '@emotion/styled': path.resolve(
        './packages/component-package/node_modules/@emotion/styled',
      ),
    },
  },
});
