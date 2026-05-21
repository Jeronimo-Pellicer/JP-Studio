#!/usr/bin/env node

/**
 * Test script to verify sitemap.xml and robots.txt are correctly configured
 * Run: node test-sitemap-config.cjs
 */

const https = require('https');
const http = require('http');

const DOMAIN = 'jpstudio.app';
const TESTS = [
  {
    name: 'Sitemap XML',
    url: `https://${DOMAIN}/sitemap.xml`,
    expectedStatus: 200,
    expectedContentType: 'application/xml',
  },
  {
    name: 'Robots TXT',
    url: `https://${DOMAIN}/robots.txt`,
    expectedStatus: 200,
    expectedContentType: 'text/plain',
  },
  {
    name: 'Home Page (SPA)',
    url: `https://${DOMAIN}/`,
    expectedStatus: 200,
    expectedContentType: 'text/html',
  },
  {
    name: 'Project Page (SPA Route)',
    url: `https://${DOMAIN}/projects/topper-plan-mobile-first`,
    expectedStatus: 200,
    expectedContentType: 'text/html',
  },
];

function testUrl(testCase) {
  return new Promise((resolve) => {
    const client = testCase.url.startsWith('https') ? https : http;
    
    const options = {
      hostname: DOMAIN,
      path: testCase.url.replace(`https://${DOMAIN}`, '').replace(`http://${DOMAIN}`, ''),
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)',
      },
    };

    const req = client.request(options, (res) => {
      const contentType = res.headers['content-type'] || '';
      const status = res.statusCode;
      const ok = status === testCase.expectedStatus;
      
      resolve({
        name: testCase.name,
        url: testCase.url,
        status,
        contentType,
        ok,
        expected: {
          status: testCase.expectedStatus,
          contentType: testCase.expectedContentType,
        },
      });
    });

    req.on('error', (error) => {
      resolve({
        name: testCase.name,
        url: testCase.url,
        status: 'ERROR',
        error: error.message,
        ok: false,
      });
    });

    req.end();
  });
}

async function runTests() {
  console.log('\n🔍 Testing Sitemap and Robots Configuration\n');
  console.log(`Domain: ${DOMAIN}\n`);

  const results = [];
  
  for (const testCase of TESTS) {
    const result = await testUrl(testCase);
    results.push(result);
    
    const icon = result.ok ? '✅' : '❌';
    console.log(`${icon} ${result.name}`);
    console.log(`   URL: ${result.url}`);
    console.log(`   Status: ${result.status}`);
    if (result.contentType) {
      console.log(`   Content-Type: ${result.contentType}`);
    }
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
    console.log();
  }

  // Summary
  const passed = results.filter(r => r.ok).length;
  const total = results.length;
  
  console.log('━'.repeat(50));
  if (passed === total) {
    console.log(`\n✅ All tests passed! (${passed}/${total})\n`);
    console.log('Your sitemap configuration is working correctly.');
    console.log('Search engines can now properly index your site.\n');
  } else {
    console.log(`\n⚠️  Some tests failed! (${passed}/${total})\n`);
    const failed = results.filter(r => !r.ok);
    failed.forEach(f => {
      console.log(`- ${f.name} (${f.url})`);
    });
    console.log();
  }
}

runTests().catch(console.error);
