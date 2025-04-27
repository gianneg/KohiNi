import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContentView from '../views/ContentView.vue';
<<<<<<< HEAD
import CaffeinatedCoffee from '@/components/Coffees/CaffeinatedCoffee.vue';
import NonCaffeinatedCoffee from '@/components/Coffees/NonCaffeinatedCoffee.vue';
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions.vue'
=======
import CaffeinatedCoffee from '../components/recipes/CaffeinatedCoffee.vue';
import NonCaffeinatedCoffee from '../components/recipes/NonCaffeinatedCoffee.vue';
>>>>>>> 9fbbc6ed7059345909acbfaecef35b6f9992b24d

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
