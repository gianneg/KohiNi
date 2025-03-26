import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CaffeinatedCoffee from "../components/CaffeinatedCoffee.vue";
import NonCaffeinatedCoffee from "../components/NonCaffeinatedCoffee.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/caffeinatedCoffee",
      name: "caffeinatedCoffee",
      component: CaffeinatedCoffee,
    },
    {
      path: "/noncaffeinatedCoffee",
      name: "noncaffeinatedCoffee",
      component: NonCaffeinatedCoffee,
    }
  ],
});

export default router;
