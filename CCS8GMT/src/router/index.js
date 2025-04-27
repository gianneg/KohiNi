import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContentView from '../views/ContentView.vue';
import CaffeinatedCoffee from '@/components/Coffees/CaffeinatedCoffee.vue';
import NonCaffeinatedCoffee from '@/components/Coffees/NonCaffeinatedCoffee.vue';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/content',
      name: 'content',
      component: ContentView,
    },
    {
      path: '/CaffeinatedCoffee',
      name: 'CaffeinatedCoffee',
      component: CaffeinatedCoffee
    },
    {
      path: '/NonCaffeinatedCoffee',
      name: 'NonCaffeinatedCoffee',
      component: NonCaffeinatedCoffee
    },
    {
      path: '/FrequentlyAskedQuestions',
      name: 'FrequentlyAskedQuestions',
      component: FrequentlyAskedQuestions
    }
  ],
})

export default router;
