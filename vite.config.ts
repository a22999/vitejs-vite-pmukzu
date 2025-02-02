import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路径配置
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'), //配置@ 路径
      },
    ],
  },
});
