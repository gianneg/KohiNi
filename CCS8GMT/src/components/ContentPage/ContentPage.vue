<template>
  <div class="content-page-info">
    <div class="drink-details">
      <transition name="fade" mode="out-in">
        <div :key="drinkData ? drinkData.drink_name : 'loading'">
          <div v-if="drinkData" class="main-content">
            <!-- Drink Name and Image -->
            <div class="drink-info">
                <div class="breadcrumbs">
                <span class="breadcrumb-text">
                <router-link to="/">
                  Home
                </router-link>
                &nbsp;>&nbsp;
                <router-link
                  v-if="drinkData.category === 'Coffee'"
                  to="/CaffeinatedCoffee"
                >
                  Caffeinated Drinks
                </router-link>

                <router-link
                  v-else
                  to="/NonCaffeinatedDrinks"
                >
                  Non-Caffeinated Drinks
                </router-link>
                &nbsp;>&nbsp;{{drinkData.drink_name}}
              </span>
              </div>
              <div class="drink-name-section">
                <div class="name-left">
                <h2 class="drink-name">{{ drinkData.drink_name }}</h2>
                <div class="drink-tags">
                  <ul class="tags-list">
                    
                    <li 
                      v-for="(tag, index) in drinkData.tags" 
                      :key="index"
                      :class="tag === 'Caramel' ? 'caramel-tag' : tag === 'Discover' ? 'discover-tag' : tag === 'Strawberry' ? 'strawberry-tag' : tag === 'Turmeric' ? 'turmeric-tag' : tag === 'Apple' ? 'apple-tag' : tag === 'Lemon' ? 'lemon-tag' : tag === 'Trending' ? 'trending-tag' : tag === 'Mocha' ? 'mocha-tag' : tag === 'Dairy' ? 'dairy-tag' : 'tags'"
                    >
                      {{ tag }}
                    </li>
                  </ul>
                </div>
                <p class="drink-description">{{ drinkData.description }}</p>
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
              <button class="ingredients-btn" @click="TTSIngred()">▷ Ingredients [Click me to enable text-to-speech]</button>
              <ul class="ingredients-list">
                  <li v-for="(ingredient, index) in drinkData.ingredients" :key="index">
                    <div class="ingredients-list-item">
                    {{ ingredient }}
                    </div>
                  </li>
              </ul>
            </div>
            
            <button class="instructions-btn" @click="TTSInstruct()">▷ Instructions [Click me to enable text-to-speech]</button>
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
  //import { useSpeechSynthesis } from '@vueuse/core'
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
      };
  
      onMounted(loadDrink);
  
      watch(() => route.params.id, async () => {
        await loadDrink();
      });
  
      return {
        drinkData,
      };
    },
    methods:{
      TTSIngred(){
        try{
        const ingredients = this.drinkData.ingredients.join(', ');
        const Utterance = new SpeechSynthesisUtterance(ingredients);
        speechSynthesis.speak(Utterance);
        }catch (error) {
            console.error("Error reading data:", error);
            }
      },

      TTSInstruct(){
        try{
        const instructions = this.drinkData.instructions.join(', ');
        const Utterance = new SpeechSynthesisUtterance(instructions);
        speechSynthesis.speak(Utterance);
        console.log(speechSynthesis.getVoices());
        console.log(this.drinkData.ingredients);
        }catch (error) {
            console.error("Error reading data:", error);
            }
      },
    }
    ,
  };
  </script>

<style scoped>
@import "./ContentPageBase.css"; /*Desktop*/
@import "./ContentPageTablet.css"; /*1024px*/
@import "./ContentPageLargeMobile.css"; /*768px*/
@import "./ContentPageSmallMobile.css"; /*480px*/

  .banner-image {
    width: 100%;
    max-width: 500px;
    height: auto;
    display: block;
    margin: 0 auto;
    padding-bottom: 20px;
  }

  .breadcrumbs {
    padding-left: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem;
    background-color: rgb(236, 224, 209);
  }

  .breadcrumb-text {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.breadcrumbs a {
  position: relative;
  color: #3e4f21;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumbs a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: #3e4f21;
  transition: width 0.3s ease;
  color: white;
}

.breadcrumbs a:hover {
  color: white;
}

.breadcrumbs a:hover::after {
  width: 100%;
}


  
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
