import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',       // Acepta conexiones externas (IPv4)
    port: 5173,            // Puerto correcto
    strictPort: true,      // Evita que Vite cambie el puerto automáticamente
    allowedHosts: [
      'segurosyuju.com',   // Dominio principal (añade sin https://)
      'localhost',         // Para desarrollo local
      '212.85.14.14'       // Tu IP pública (opcional)
    ],
  },
  plugins: [react()],
  // Opcional: Configuración base si tu app no está en la raíz del dominio
  // base: '/ruta-deploy/',
});
