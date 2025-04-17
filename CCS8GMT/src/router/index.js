import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContentView from '../views/ContentView.vue';
import CaffeinatedCoffee from '../components/recipes/CaffeinatedCoffee.vue';
import NonCaffeinatedCoffee from '../components/recipes/NonCaffeinatedCoffee.vue';

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
      path: '/NonCaffeinatedDrinks',
      name: 'NonCaffeinatedDrinks',
      component: NonCaffeinatedCoffee
    }
  ],
})

export default router;
