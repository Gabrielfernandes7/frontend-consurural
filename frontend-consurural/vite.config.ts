import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  define: {
    'VITE_API_URL': 'http://localhost:8080/',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/', // Defina o URL diretamente aqui
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
});
