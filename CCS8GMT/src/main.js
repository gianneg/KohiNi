import './assets/main.css'

import { createApp } from 'vue'
import Content from './Content.vue'
import router from './router'

const content = createApp(Content)

// v-reveal: fades elements in as they scroll into view
content.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    observer.observe(el)
  },
})

content.use(router)

content.mount('#content')
