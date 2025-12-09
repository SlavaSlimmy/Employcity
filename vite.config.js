import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  base: "/Employcity/",
  root: './',
  plugins: [
    {
      name: 'inject-critical-css',
      transformIndexHtml(html) {
        const criticalPath = path.resolve(__dirname, 'public', 'critical.css');
        let critical = '';
        if (fs.existsSync(criticalPath)) {
          critical = fs.readFileSync(criticalPath, 'utf8');
        }
        return html.replace('<!-- inject-critical-css -->', critical ? `<style>${critical}</style>` : '');
      },
    },
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
