import './assets/main.css'

import { createApp } from 'vue'
import Content from './Content.vue'
import router from './router'

const content = createApp(Content)

content.use(router)

content.mount('#content')
