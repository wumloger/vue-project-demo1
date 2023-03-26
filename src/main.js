import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'

import '../node_modules/element-plus/dist/index.css'
import './assets/main.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
const app = createApp(App)


app.use(elementPlus)
app.use(router)

app.mount('#app')
