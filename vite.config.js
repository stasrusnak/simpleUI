import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
  ],
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
  }
});
