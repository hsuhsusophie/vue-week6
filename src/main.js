// import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
// import VueAxios from 'vueaxios'
import 'bootstrap/scss/bootstrap.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios)
app.mount('#app')
