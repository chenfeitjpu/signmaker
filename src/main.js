import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import Head from './view/Head.vue'
import Foot from './view/Foot.vue'
import Questions from './view/Questions.vue'
import Features from './view/Features.vue'

const app = createApp(App)
app.use(router).mount('#app')
app.component('Head', Head)
app.component('Foot', Foot)
app.component('Questions', Questions)
app.component('Features', Features)