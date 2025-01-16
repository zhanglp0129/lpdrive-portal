import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default ({mode}) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '/portal')
        }
      }
    }
  })
}
