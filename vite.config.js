import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.js',
      name: '@stanislav999/simpleui'
    },

    rollupOptions: {
      output: {
        exports: 'named',
        format: 'es' // Экспортировать компоненты в виде ES модулей
      }
    }
  }
});
