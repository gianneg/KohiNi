import { createApp } from 'vue'
import Header from '../Header.vue'
import router from '../router'

const header = createApp(Header)

header.use(router)

header.mount('#header')
