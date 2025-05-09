<template>
    <div class="video-section">
        This is where the video should be.
    </div>

    <div class="student-favorites">
        <h2 id="favorites-title">Student Favorites!</h2>
        <div class="cards">
            <div class="card" @click="$router.push(`/content/${item.id}`)" v-for="(item, index) in favoriteItems" :key="index" >
                <h5 class="card-title">{{ item.title }}</h5>
            </div>
        </div>
    </div>

    <div class="recipes">
        <div class="recipes-header">
            <h2 class="recipe-title">RECIPES</h2>
            <div class="ribbon">
                <p>Browse recipes by category!</p>
            </div>
        </div>
        <div class="categories">
            <div class="drink-card" v-for="(drink, index) in drinkCategories" :key="index">
                <img :src="drink.image" alt="Drink Image" class="drink-card-image"/>
                <div class="drink-card-text">
                    <h6 class="drink-card-title">{{ drink.title }}</h6>
                    <a class="drink-card-link" @click="navigateTo(drink.route)">Browse Recipes ></a>
                </div>
            </div>
        </div>
    </div>

    <DrinkCarousel />
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { db } from "../../lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import DrinkCarousel from "../DrinkCarousel/DrinkCarousel.vue";

export default {
    components: { DrinkCarousel },
    setup() {
        const router = useRouter();
        const favoriteItems = ref([]);

        const fetchFavoriteDrinks = async () => {
            try {
                const drinksRef = collection(db, "Drinks");
                const q = query(
                    drinksRef,
                    where("drink_name", "in", [
                        "Caramel Macchiato",
                        "Spanish Iced Latte",
                        "Espresso"
                    ])
                );
                const querySnapshot = await getDocs(q);
                const fetchedItems = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    fetchedItems.push({
                        id: doc.id,
                        title: data.drink_name,
                    });
                });
                favoriteItems.value = fetchedItems;
            } catch (error) {
                console.error("Error fetching favorite drinks:", error);
            }
        };

        onMounted(() => {
            fetchFavoriteDrinks();
        });

        const drinkCategories = [
            {
                title: "Caffeine-based Drinks",
                route: "/CaffeinatedCoffee",
                image: "/img/caramelmacchiato.jpg"
            },
            {
                title: "Non-caffeinated Drinks",
                route: "/NonCaffeinatedDrinks",
                image: "/img/icedchocolatemilk.jpg"
            },
        ];

        const navigateTo = (route) => {
            router.push(route);
        };

        return {
            favoriteItems,
            drinkCategories,
            navigateTo
        };
    }
};
</script>

<style scoped>
    @import "./HomepageBase.css"; /*Desktop*/
    @import "./HomepageTablet.css"; /*1024px*/
    @import "./HomepageLargeMobile.css"; /*768px*/
    @import "./HomepageSmallMobile.css"; /*480px*/
</style>