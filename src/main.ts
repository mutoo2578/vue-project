import './assets/styles.css'
import { createApp } from 'vue'
import App from './App.vue'
// 引入整个 Element Plus（包含所有组件）
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus) // 全局注册所有组件
app.mount('#app')
