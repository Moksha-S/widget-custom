import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'), // Adjust to match your entry point
      name: 'MyWidget',
      fileName: (format) => `my-widget.${format}.js`,
      formats: ['es', 'umd'] // Outputs both ES and UMD formats
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
