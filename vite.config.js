import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue({ customElement: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'), // Adjust to match your entry point
      name: 'CustomChartWidget',
      fileName: (format) => `index.${format}.js`,
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
