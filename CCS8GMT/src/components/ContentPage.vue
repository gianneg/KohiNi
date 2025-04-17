<template>
    <div class="drink-details">
        <div class="main-content" v-if="drinkData">
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
                <button @click="toggleSection('ingredients')">
                    ▷ Ingredients
                </button>
                <ul v-if="sections.ingredients">
                    <li v-for="(ingredient, index) in drinkData.ingredients" :key="index">
                        {{ ingredient }}
                    </li>
                </ul>
            </div>

            <!-- Instructions -->
            <div class="section">
                <button @click="toggleSection('instructions')">
                    ▷ Instructions
                </button>
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
        <!-- Loading Spinner -->
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { db } from "../lib/firebase";
import { doc, getDoc, collection, getDocs, query, where, limit } from "firebase/firestore";
import DrinkCarousel from "./DrinkCarousel/DrinkCarousel.vue";

export default {
  components: { DrinkCarousel },
  setup() {
    const route = useRoute();
    const drinkId = route.params.id;

    const drinkData = ref(null);
    const similarDrinks = ref([]);
    const sections = ref({
      ingredients: false,
      instructions: false,
    });

    const fetchDrinkData = async () => {
      try {
        const docRef = doc(db, "Drinks", drinkId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          drinkData.value = docSnap.data();
        } else {
          console.error("Drink not found.");
        }
      } catch (err) {
        console.error("Error loading drink:", err);
      }
    };

    const fetchSimilarDrinks = async () => {
      try {
        const q = query(collection(db, "drinks"), limit(6));
        const snapshot = await getDocs(q);

        similarDrinks.value = snapshot.docs
          .filter(doc => doc.id !== drinkId)
          .map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
      } catch (err) {
        console.error("Error loading similar drinks:", err);
      }
    };

    const toggleSection = (section) => {
      sections.value[section] = !sections.value[section];
    };

    onMounted(async () => {
      await fetchDrinkData();
      await fetchSimilarDrinks();
    });

    return {
      drinkData,
      similarDrinks,
      sections,
      toggleSection,
    };
  },
};
</script>
