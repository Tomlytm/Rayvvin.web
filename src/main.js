import './assets/main.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import store from './store'
import router from './router'


import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'



const app = createApp(App)

app.use(ToastPlugin, {
    position: 'top-right',
    duration: 3000
});

app.use(VueChartkick)
app.use(router)
app.use(store)


app.mount('#app')
