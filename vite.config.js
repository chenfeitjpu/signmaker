import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig((config) => {
  return {  
    plugins: [vue()],
    base: config.mode === 'prod' ? 'https://cdn.signmaker.io/signmaker/html/' : '/signmaker/html/',
    build: {
        outDir: 'dist/signmaker/html',  // 默认输出目录
        rollupOptions: {
            input: {
                //main: './index.html',  // 默认页面
                page1: './ai-handwritten-signature-generator-free.html', // 页面 1
                page2: './ai-calligraphy-signature-generator-free.html', // 页面 1
            }
        }
    }
  }
})
