// vite.config.ts
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [vueJsx(), vueSetupExtend(), AutoImport({}), Components({})],
  server: {
    host: '0.0.0.0',
    port: 2222
    // open: true
  }
})
