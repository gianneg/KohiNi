<template>
  <div class="content-page-info">
    <div class="drink-details">
      <transition name="fade" mode="out-in">
        <div :key="drinkData ? drinkData.drink_name : 'loading'">
          <div v-if="drinkData" class="main-content">
              <h1 class="content-name">{{ drinkData.content_name }}</h1>


            <!-- Drink Name and Image -->
            <div class="drink-info">
              <div class="drink-name-section">
                <div class="name-left">
                <h2 class="drink-name">{{ drinkData.drink_name }}</h2>
                <div class="drink-tags">
                  <ul class="tags-list">
                    
                    <li 
                      v-for="(tag, index) in drinkData.tags" 
                      :key="index"
                      :class="tag === 'Caramel' ? 'caramel-tag' : tag === 'Discover' ? 'discover-tag' : 'tags'"
                    >
                      {{ tag }}
                    </li>
                  </ul>
                </div>
                <p>{{ drinkData.description }}</p>
              </div>
                <img :src="drinkData.image_url" alt="Drink Image" class="drink-image"/>
              </div>
            </div>
            
            <!-- Insert text to speech button here -->

            <!-- Ingredients -->
              <div class="ingredients-section">
                <div class="allergy-ribbon">
                <p class="allergy">Make sure to thoroughly check ingredients to avoid allergies!</p>
              </div>
              <button class="ingredients-btn">▷ Ingredients</button>
              <ul class="ingredients-list">
                  <li v-for="(ingredient, index) in drinkData.ingredients" :key="index">
                    <div class="ingredients-list-item">
                    {{ ingredient }}
                    </div>
                  </li>
              </ul>
            </div>
            
            <button class="instructions-btn">▷ Instructions</button>
            <div class="instructions-and-fun">
              <!-- Instructions -->
                <ul class="instructions-list">
                  <li class="instructions-list-item" v-for="(step, index) in drinkData.instructions" :key="index">
                    {{ step }}
                  </li>
                </ul>
    
              <!-- Fun Fact -->
              <div class="fun-fact">
                <h4>Fun Fact</h4>
                <p>{{ drinkData.fun_fact }}</p>
              </div>
          </div>

          <DrinkCarousel />
        </div>
          
          <!-- Properly adjacent v-else -->
          <div v-else class="loading-spinner">
            <p>Loading...</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
  
  

  <script>
  import { onMounted, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import { db } from "../../lib/firebase";
  import { doc, getDoc, collection, getDocs, query, where, limit } from "firebase/firestore";
  import DrinkCarousel from "../DrinkCarousel/DrinkCarousel.vue";
  
  export default {
    components: { DrinkCarousel },
    setup() {
      const route = useRoute();
      const drinkData = ref(null);
  
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
  
      const loadDrink = async () => {
        const id = route.params.id;
        await fetchDrinkData(id);
        await fetchSimilarDrinks(id);
      };
  
      onMounted(loadDrink);
  
      watch(() => route.params.id, async () => {
        await loadDrink();
      });
  
      return {
        drinkData,
      };
    },
  };
  </script>

<style scoped>
@import "./ContentPageBase.css"; /*Desktop*/
@import "./ContentPageTablet.css"; /*1024px*/
@import "./ContentPageLargeMobile.css"; /*768px*/
@import "./ContentPageSmallMobile.css"; /*480px*/

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
