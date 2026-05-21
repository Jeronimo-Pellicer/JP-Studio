#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const HOSTNAME = 'https://jpstudio.app';
const OUTPUT_PATH = path.join(__dirname, 'public', 'sitemap.xml');

const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/projects', priority: 0.9, changefreq: 'weekly' },
  { path: '/projects/topper-plan-mobile-first', priority: 0.7, changefreq: 'monthly' },
  { path: '/projects/stiberman-law-seo-sem', priority: 0.7, changefreq: 'monthly' },
  { path: '/projects/lisicki-litvin-metricas', priority: 0.7, changefreq: 'monthly' },
  { path: '/projects/kiddo-franquicias', priority: 0.7, changefreq: 'monthly' },
  { path: '/projects/easytrack-reporte-financiero', priority: 0.7, changefreq: 'monthly' },
  { path: '/projects/easytruck-app-growth-campaigns', priority: 0.7, changefreq: 'monthly' },
  { path: '/herramientas', priority: 0.8, changefreq: 'monthly' },
  { path: '/herramientas/calculadora-roi', priority: 0.7, changefreq: 'monthly' },
  { path: '/herramientas/buyer-persona', priority: 0.7, changefreq: 'monthly' },
  { path: '/herramientas/matriz-priorizacion', priority: 0.7, changefreq: 'monthly' },
  { path: '/herramientas/quiz-estrategia', priority: 0.7, changefreq: 'monthly' },
  { path: '/recursos', priority: 0.8, changefreq: 'weekly' },
  { path: '/books', priority: 0.6, changefreq: 'monthly' },
  { path: '/glosario-marketing', priority: 0.8, changefreq: 'monthly' },
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${HOSTNAME}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>\n';
  
  // Ensure public directory exists
  const publicDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(OUTPUT_PATH, xml);
  console.log(`✓ Sitemap generated successfully: ${OUTPUT_PATH}`);
}

// Generate sitemap
try {
  generateSitemap();
} catch (error) {
  console.error('✗ Error generating sitemap:', error.message);
  process.exit(1);
}
