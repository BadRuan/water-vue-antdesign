import 'ant-design-vue/dist/reset.css'

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import { router } from './router/index.ts'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(Antd)
app.use(router)
app.use(pinia)

app.mount('#app')
