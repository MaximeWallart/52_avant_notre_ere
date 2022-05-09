import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import vuei18n from '@intlify/vite-plugin-vue-i18n'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vuei18n({
      include: resolve(__dirname, './locales/**')
    }),
    Icons(),
    AutoImport({ imports: ['vue', 'vue-i18n', 'vue-router'] ,dts: 'src/auto-imports.d.ts' }),
    Pages(),
    WindiCSS(),
  ]
})
