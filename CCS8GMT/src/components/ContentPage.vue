<template>
    <div class="drink-details">
      <transition name="fade" mode="out-in">
        <!-- Wrap in a single root element -->
        <div :key="drinkData ? drinkData.drink_name : 'loading'">
          <div v-if="drinkData" class="main-content">
            <h1 class="content-name">{{ drinkData.content_name }}</h1>
  
            <!-- Drink Name and Image -->
            <div class="drink-info">
              <div>
                <h2 class="drink-name">{{ drinkData.drink_name }}</h2>
                <p>{{ drinkData.description }}</p>
              </div>
              <img :src="drinkData.image_url" alt="Drink Image" class="drink-image" />
            </div>
  
            <!-- Ingredients -->
            <div class="section">
              <button @click="toggleSection('ingredients')">▷ Ingredients</button>
              <ul v-if="sections.ingredients">
                <li v-for="(ingredient, index) in drinkData.ingredients" :key="index">
                  {{ ingredient }}
                </li>
              </ul>
            </div>
  
            <!-- Instructions -->
            <div class="section">
              <button @click="toggleSection('instructions')">▷ Instructions</button>
              <ul v-if="sections.instructions">
                <li v-for="(step, index) in drinkData.instructions" :key="index">
                  {{ step }}
                </li>
              </ul>
            </div>
  
            <!-- Fun Fact -->
            <div class="fun-fact">
              <h4>Fun Fact</h4>
              <p>{{ drinkData.fun_fact }}</p>
            </div>
  
            <!-- Similar Drinks Carousel -->
            <h3 class="similar-title">A few similar drinks</h3>
            <DrinkCarousel :drinks="similarDrinks" />
          </div>
  
          <!-- Properly adjacent v-else -->
          <div v-else class="loading-spinner">
            <p>Loading...</p>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  

  <script>
  import { onMounted, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import { db } from "../lib/firebase";
  import { doc, getDoc, collection, getDocs, query, where, limit } from "firebase/firestore";
  import DrinkCarousel from "./DrinkCarousel/DrinkCarousel.vue";
  
  export default {
    components: { DrinkCarousel },
    setup() {
      const route = useRoute();
      const drinkData = ref(null);
      const similarDrinks = ref([]);
      const sections = ref({
        ingredients: false,
        equipment: false,
        instructions: false,
      });
  
      const fetchDrinkData = async (id) => {
        try {
          const docRef = doc(db, "Drinks", id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            drinkData.value = docSnap.data();
          } else {
            console.error("Drink not found.");
          }
        } catch (error) {
          console.error("Error fetching drink:", error);
        }
      };
  
      const fetchSimilarDrinks = async (id) => {
        try {
          const q = query(
            collection(db, "Drinks"),
            where("id", "!=", id), // Only works if `id` is stored as a field in the doc
            limit(6)
          );
          const querySnapshot = await getDocs(q);
          similarDrinks.value = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
        } catch (error) {
          console.error("Error fetching similar drinks:", error);
        }
      };
  
      const loadDrink = async () => {
        const id = route.params.id;
        await fetchDrinkData(id);
        await fetchSimilarDrinks(id);
      };
  
      onMounted(loadDrink);
  
      // Re-fetch on route param change
      watch(() => route.params.id, async () => {
        await loadDrink();
      });
  
      const toggleSection = (section) => {
        sections.value[section] = !sections.value[section];
      };
  
      return {
        drinkData,
        similarDrinks,
        sections,
        toggleSection,
      };
    },
  };
  </script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: all 0.2s ease;
  }
  .fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
</style>
