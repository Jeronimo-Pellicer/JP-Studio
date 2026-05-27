#!/usr/bin/env node

const https = require('https');
const http = require('http');

const articles = [
  'cjm-template',
  'foda-kit',
  'content-calendar',
  'nps-template',
  'content-strategy',
  'guia-customer-journey-map',
  'guia-seo-local',
  'guia-estrategia-linkedin',
  'cx-metrics-guide',
  'infografia-anatomia-post-linkedin',
  'infografia-optimizacion-atencion-cliente',
  'infografia-palabras-clave',
  'infografia-elementos-landing-page'
];

console.log(`\n🧪 Testing ${articles.length} resource articles...\n`);

let success = 0;
let failed = 0;
let results = [];

function testUrl(article) {
  return new Promise((resolve) => {
    const url = `https://jpstudio.app/recursos/${article}`;
    const request = https.get(url, { timeout: 10000 }, (res) => {
      const cache = res.headers['x-vercel-cache'] || 'MISS';
      const status = res.statusCode;
      
      if (status === 200) {
        console.log(`✅ ${article.padEnd(40)} 200 | Cache: ${cache}`);
        success++;
        results.push(`✅ ${article}`);
      } else {
        console.log(`❌ ${article.padEnd(40)} ${status}`);
        failed++;
        results.push(`❌ ${article}`);
      }
      resolve();
    });

    request.on('error', (err) => {
      console.log(`❌ ${article.padEnd(40)} ERROR: ${err.message}`);
      failed++;
      results.push(`❌ ${article}`);
      resolve();
    });

    request.on('timeout', () => {
      console.log(`❌ ${article.padEnd(40)} TIMEOUT`);
      failed++;
      results.push(`❌ ${article}`);
      request.destroy();
      resolve();
    });
  });
}

async function runAllTests() {
  // Test sequentially with 500ms delay between each
  for (let i = 0; i < articles.length; i++) {
    await testUrl(articles[i]);
    if (i < articles.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ Success: ${success}/${articles.length}`);
  if (failed > 0) {
    console.log(`❌ Failed: ${failed}/${articles.length}`);
  } else {
    console.log(`🎉 ALL ARTICLES VERIFIED!`);
  }
  console.log(`${'='.repeat(60)}\n`);
}

runAllTests().catch(console.error);
