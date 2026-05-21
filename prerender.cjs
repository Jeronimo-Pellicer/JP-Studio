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
  '/projects/easytruck-app-growth-campaigns',
  '/herramientas',
  '/herramientas/calculadora-roi',
  '/herramientas/buyer-persona',
  '/herramientas/matriz-priorizacion',
  '/herramientas/quiz-estrategia',
  '/recursos',
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

  for (const route of routes) {
    const { appHtml, head } = await render(route);
    const html = template
      .replace('<!--app-head-->', head || '')
      .replace('<!--app-html-->', appHtml || '');

    const filePath = route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route, 'index.html');

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
  }

  console.log(`✓ Prerendered ${routes.length} routes`);
}

prerender().catch((error) => {
  console.error('✗ Prerender failed:', error);
  process.exit(1);
});
