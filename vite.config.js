import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Lightweight internal API mock plugin for service animation asset management
function serviceAssetsApiPlugin() {
  return {
    name: 'service-assets-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/service-assets') {
          try {
            const manifestPath = path.resolve(__dirname, 'public/assets/videos/service-assets.json');
            if (fs.existsSync(manifestPath)) {
              const manifestContent = fs.readFileSync(manifestPath, 'utf8');
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Cache-Control', 'public, max-age=3600');
              res.end(manifestContent);
              return;
            }
          } catch (err) {
            console.error('Error serving /api/service-assets:', err);
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), serviceAssetsApiPlugin()],
  server: {
    port: 5173,
    host: true
  }
});

