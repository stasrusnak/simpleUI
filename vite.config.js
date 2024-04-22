import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  /* Build For library UI */

  build: {
    lib:{
      entry: resolve(__dirname, "src/main.js"),
      name:"simpleui",
      fileName: (format)=> `simpleui.${format}.js`
    },
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    }
  },
  /* Build Site preview */

  // build: {
  //   outDir: 'dist', // Указываем папку, куда будет собрано приложение
  //   emptyOutDir: true, // Очищаем outDir перед каждой сборкой
  //   sourcemap: true, // Генерируем sourcemaps для упрощения отладки
  // },

});
