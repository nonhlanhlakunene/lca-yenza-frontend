
import { createApp } from 'vue'
import App from './App.vue'
import store from './stores'
import './assets/main.css'

import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
