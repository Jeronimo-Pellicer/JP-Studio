/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const routes = [
  '/',
  '/projects',
  '/projects/topper-plan-mobile-first',
  '/projects/stiberman-law-seo-sem',
  '/projects/lisicki-litvin-metricas',
  '/projects/kiddo-franquicias',
  '/projects/easytrack-reporte-financiero',
  '/projects/pinturerias-coco-transformacion-digital',
  '/herramientas',
  '/herramientas/calculadora-roi',
  '/herramientas/buyer-persona',
  '/herramientas/matriz-priorizacion',
  '/herramientas/quiz-estrategia',
  '/recursos',
  '/recursos/cjm-template',
  '/recursos/foda-kit',
  '/recursos/content-calendar',
  '/recursos/nps-template',
  '/recursos/content-strategy',
  '/recursos/guia-customer-journey-map',
  '/recursos/guia-seo-local',
  '/recursos/guia-estrategia-linkedin',
  '/recursos/cx-metrics-guide',
  '/recursos/infografia-anatomia-post-linkedin',
  '/recursos/infografia-optimizacion-atencion-cliente',
  '/recursos/infografia-palabras-clave',
  '/recursos/infografia-elementos-landing-page',
  '/books',
  '/glosario-marketing',
];

const distDir = path.resolve(__dirname, 'dist');
const serverEntry = path.resolve(__dirname, 'dist', 'server', 'entry-server.js');

async function prerender() {
  if (!fs.existsSync(serverEntry)) {
    throw new Error('SSR bundle not found. Run "npm run build:ssr" first.');
  }

  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  const { render } = await import(pathToFileURL(serverEntry).href);

  let successCount = 0;
  let failureCount = 0;

  for (const route of routes) {
    try {
      const { appHtml, head } = await render(route);
      const html = template
        .replace('<!--app-head-->', head || '')
        .replace('<!--app-html-->', appHtml || '');

      let filePath;
      if (route === '/') {
        filePath = path.join(distDir, 'index.html');
      } else {
        filePath = path.join(distDir, route, 'index.html');
      }

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html);
      successCount++;
    } catch (error) {
      console.warn(`⚠ Failed to render ${route}: ${error.message}`);
      failureCount++;
    }
  }

  console.log(`✓ Prerendered ${successCount} routes (${failureCount} failed)`);
}

prerender().catch((error) => {
  console.error('✗ Prerender failed:', error);
  process.exit(1);
});
