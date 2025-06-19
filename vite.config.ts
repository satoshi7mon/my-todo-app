import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite側で@/を認識するための設定追加
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
