import {defineConfig} from "vite";
import {fileURLToPath} from "url";
import {resolve} from "path";
import importToCDN from 'vite-plugin-cdn-import'

export default defineConfig({
  plugins: [
    importToCDN({
      modules:[
        {
          name:'jquery',
          var:'jQuery',
          path:'https://code.jquery.com/jquery-2.1.4.min.js'
        },
        {
          name:'jquery-pjax',
          var:'jQuery-pjax',
          path:'https://cdn.bootcdn.net/ajax/libs/jquery.pjax/2.0.1/jquery.pjax.min.js'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.ts', '.scss']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/global.scss";',
      }
    }
  },
  build: {
    outDir: fileURLToPath(new URL("./template/templates/assets/dist", import.meta.url)),
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "main",
      fileName: "main",
      formats: ["iife"],
    },
  },
});
