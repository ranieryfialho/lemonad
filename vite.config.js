import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url' // Importar os utilitários de URL

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // A forma moderna e segura de resolver o caminho para o alias
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})