import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  // Detect SSR build via process.argv (vite build --ssr passes --ssr flag)
  const isSsr = process.argv.includes('--ssr')
  
  const buildConfig = {
    outDir: isSsr ? 'dist/server' : 'dist',
    emptyOutDir: !isSsr,
    ssrManifest: !isSsr,
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
  }

  // Only add rollupOptions for client builds
  if (!isSsr) {
    buildConfig.rollupOptions = {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          'gsap': ['gsap'],
          'framer': ['framer-motion'],
          'radix-ui': ['@radix-ui/react-label', '@radix-ui/react-progress', '@radix-ui/react-select', '@radix-ui/react-slider', '@radix-ui/react-slot', '@radix-ui/react-tabs', '@radix-ui/react-tooltip'],
          'dnd': ['@hello-pangea/dnd'],
          'ogl': ['ogl'],
          'ui-components': ['sonner', 'lucide-react'],
        },
      },
    }
  }

  return {
    plugins: [
      react(),
      sitemap({
        hostname: 'https://jpstudio.app',
        outDir: './public',
        dynamicRoutes: [
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
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: buildConfig,
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
      exclude: ['ogl'],
    },
  }
})
