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
import { db } from "../lib/firebase";
import { doc, getDoc, collection, getDocs, query, where, limit } from "firebase/firestore";
import DrinkCarousel from "./DrinkCarousel/DrinkCarousel.vue";

export default {
    components: { DrinkCarousel },
    data() {
        return {
            drinkData: null,
            similarDrinks: [],
            sections: {
                ingredients: false,
                equipment: false,
                instructions: false,
            },
        };
    },
    methods: {
        async fetchDrinkData() {
            try {
                const docRef = doc(db, "drinks", this.$route.params.id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    this.drinkData = docSnap.data();
                } else {
                    console.error("No such drink found.");
                }
            } catch (error) {
                console.error("Error fetching drink data:", error);
            }
        },
        async fetchSimilarDrinks() {
            try {
                const q = query(
                    collection(db, "drinks"),
                    where("id", "!=", this.$route.params.id), // assumes you store `id` field explicitly
                    limit(6)
                );

                const querySnapshot = await getDocs(q);
                this.similarDrinks = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            } catch (error) {
                console.error("Error fetching similar drinks:", error);
            }
        },
        toggleSection(section) {
            this.sections[section] = !this.sections[section];
        },
    },
    async mounted() {
        await this.fetchDrinkData();
        await this.fetchSimilarDrinks();
    },
};
</script>
