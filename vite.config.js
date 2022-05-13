import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // comment-out building the lib, build dist 
    // lib: {
    //   entry: 'src/my-element.js',
    //   formats: ['es']
    // },
    // rollupOptions: {
    //   external: /^lit/
    // }
  },
  server: {
    host: '0.0.0.0',
    open: '/index.html',
  }
})
