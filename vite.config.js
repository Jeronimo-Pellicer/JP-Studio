import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://jpstudio.app',
        dynamicRoutes: [
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
        ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate heavy vendor libraries into their own chunks
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
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Minify for production using esbuild (built-in, no dependencies needed)
    minify: 'esbuild',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    exclude: ['ogl'],
  },
})
