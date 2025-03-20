<template>
    <div class="drink-details">
        <header class="drink-header">
            <nav>
                <ul>
                    <li><router-link to="/about">About Us</router-link></li>
                    <li><router-link to="/faq">FAQ</router-link></li>
                    <li><router-link to="/sitemap">Site Map</router-link></li>
                    <li><router-link to="/recipes">Recipes</router-link></li>
                </ul>
                <input type="text" placeholder="Search..." />
            </nav>
        </header>

        <div class="main-content">
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

            <!-- Equipment Used -->
            <div class="section">
                <button @click="toggleSection('equipment')">
                    ▷ Equipment Used
                </button>
                <ul v-if="sections.equipment">
                    <li v-for="(item, index) in drinkData.equipment_used" :key="index">
                        {{ item }}
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
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabase";
import DrinkCarousel from "./DrinkCarousel.vue";

export default {
    components: { DrinkCarousel },
    data() {
        return {
            drinkData: {
                content_name: "",
                drink_name: "",
                description: "",
                image_url: "",
                ingredients: [],
                equipment_used: [],
                instructions: [],
                fun_fact: "",
            },
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
            const { data, error } = await supabase
                .from("drinks")
                .select("*")
                .eq("id", this.$route.params.id)
                .single();

            if (error) console.error("Error fetching drink data:", error);
            else this.drinkData = data;
        },
        async fetchSimilarDrinks() {
            const { data, error } = await supabase
                .from("drinks")
                .select("id, drink_name, image_url")
                .limit(6);

            if (error) console.error("Error fetching similar drinks:", error);
            else this.similarDrinks = data;
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

<style scoped>
/* Header */
header {
    background: #f5ebe0;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    display: flex;
    gap: 20px;
    list-style: none;
}

nav input {
    padding: 5px;
}

/* Drink Details */
.drink-details {
    background: #f9f5f0;
    padding: 30px;
}

.content-name {
    font-size: 24px;
    font-weight: bold;
    color: #7b4b2a;
}

.drink-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.drink-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.drink-name {
    font-size: 30px;
    color: #492310;
}

/* Sections */
.section {
    margin-bottom: 10px;
}

.section button {
    font-size: 18px;
    background: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
}

ul {
    list-style-type: disc;
    margin-left: 20px;
}

/* Fun Fact */
.fun-fact {
    background: #7b4b2a;
    color: white;
    padding: 10px;
    border-radius: 10px;
    max-width: 300px;
    margin-top: 20px;
}

/* Similar Drinks */
.similar-title {
    text-align: center;
    font-size: 20px;
    margin-top: 30px;
}
</style>
