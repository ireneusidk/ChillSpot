import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
    port: process.env.PORT || 4173,  // Usa el puerto asignado por Render o un valor predeterminado local
    host: '0.0.0.0'  // Asegúrate de exponer el puerto para que Render lo pueda acceder
  }
})