import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Performance optimizations
  build: {
    // Optimize bundle size
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-collapsible', '@radix-ui/react-dropdown-menu', '@radix-ui/react-icons'],
          query: ['@tanstack/react-query'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    },
    // Increase chunk size warning limit for our optimized chunks
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  // Development server optimizations
  server: {
    // Enable file system caching
    fs: {
      allow: ['..']
    }
  },
  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-icons',
      '@radix-ui/react-label',
      '@radix-ui/react-select',
      '@radix-ui/react-slot',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      '@tanstack/react-query',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
  // Preview server for production builds
  preview: {
    port: 4173,
    host: true
  }
})
