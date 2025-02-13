import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, './src/components/index.ts'),
      formats: ['es', 'cjs'],
      name: 'vue-draggable-grid'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()],
  resolve:{
    alias:{
      '@' : resolve(__dirname, './src')
    }
  }
})
