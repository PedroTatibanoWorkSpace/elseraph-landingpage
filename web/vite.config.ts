import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react() // Versão simplificada sem configuração Babel personalizada
  ],
  build: {
    // Otimizações de build
    target: 'es2019', // Maior compatibilidade
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove logs em produção
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion'],
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    open: true
  }
});
