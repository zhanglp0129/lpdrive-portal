import { createApp } from 'vue'
import App from './App.vue'
import './styles/reset.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import pinia from './store'
import router from './router'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(pinia)
app.use(router)
app.mount('#app')
