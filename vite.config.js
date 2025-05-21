import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
   server: {
    host: '0.0.0.0', // Acepta conexiones externas (IPv4)
    port: 5173,      // Puerto correcto
    strictPort: true, // Evita que Vite cambie el puerto automáticamente
  },
  plugins: [react()],
})
