import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
gsap.registerPlugin(SplitText, ScrollTrigger)
