import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContentView from '../views/ContentView.vue';
import CaffeinatedCoffee from '../components/recipes/CaffeinatedCoffee.vue';
import NonCaffeinatedDrinks from '../components/recipes/NonCaffeinatedDrinks.vue';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions.vue';
import SiteMap from '../components/SiteMap/SiteMap.vue'

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
      path: '/content/:id',
      name: 'Content',
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
      component: NonCaffeinatedDrinks
    },
    {
      path: '/FAQ',
      name: 'FrequentlyAskedQuestions',
      component: FrequentlyAskedQuestions
    },
    {
      path:'/Site-Map',
      name:'SiteMap',
      component: SiteMap
    }
  ],
})

export default router;
