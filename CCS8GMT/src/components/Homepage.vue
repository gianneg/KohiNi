<template>
    <div class="video-section">
        This is where the video should be.
    </div>

    <div class="student-favorites">
        <h2 id="favorites-title">Student Favorites!</h2>
        <div class="cards">
            <div class="card" v-for="(item, index) in favoriteItems" :key="index">
                Photo
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-caption">{{ item.caption }}</p>
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
                <img :src="drink.image" alt="Drink Image" />
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
    import DrinkCarousel from "./DrinkCarousel.vue";

    export default {
        components: { DrinkCarousel }
        ,
        data() {
            return {
                favoriteItems: [
                    { title: "Title 1", caption: "Caption 1" },
                    { title: "Title 2", caption: "Caption 2" },
                    { title: "Title 3", caption: "Caption 3" },
                ],
                drinkCategories: [
                    { title: "Caffeine-based Drinks", route: "/caffeine-drinks", image: "https://via.placeholder.com/100" },
                    { title: "Non-caffeinated Drinks", route: "/non-caffeine-drinks", image: "https://via.placeholder.com/100" },
                ],
            };
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route);
            },
        },
    };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Viaoda+Libre&display=swap');
.video-section {
    min-height: 30vh;
}

.student-favorites {
    padding-top: 20px;
    padding-bottom: 40px;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #ECE0D1;
}

.recipes {
    background-color: #FFF5E8;
}

.recipes-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.recipe-title {
    font-family: "Viaoda Libre", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 200px;
    letter-spacing: -20px;
    color: #556B2F;
    opacity: 50%;
    margin-top: -10px;
}

.ribbon {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 20px;
    background-color: #556B2F;
    color: #FFFFFF;
    padding-left: 20px;
    padding-right: 200px;
    border-radius: 20px 0px 0px 20px;
    margin-top: -280px;
}

#favorites-title {
    font-family: "Raleway", sans-serif;
    font-size: 40px;
    color: #492310;
}

.categories {
    margin-top: -260px;
    padding-bottom: 100px;
    display: flex;
    justify-content: space-evenly;
    padding-left: 17%;
}

.cards {
    display: flex;
    justify-self: center;
    gap: 50px;
}

.card {
    background-color: #FFF8F0;
    padding: 0 70px 40px;
    color: #492310;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}

.card-title {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 20px;
}

.card-caption {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
}

.drink-card {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
}

.drink-card-title {
    font-family: "Platypi", serif;
    font-style: italic;
    font-weight: 100;
    font-size: 20px;
    color: #634832;
    margin-bottom: 20px;
}


.drink-card-link {
    color: black;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 20px;
}

@media screen and (max-width: 1024px) {
    .recipe-title {
        font-size: 80px;
    }

    .ribbon {
        font-size: 14px;
        padding: 8px 16px;
    }

    .categories {
        flex-direction: column;
        align-items: center;
    }
}

@media screen and (max-width: 768px) {
    .recipe-title {
        font-size: 60px;
    }

    .ribbon {
        font-size: 14px;
        padding: 6px 12px;
    }

    .cards {
        flex-direction: column;
        align-items: center;
    }

    .drink-card {
        width: 200px;
    }

    .drink-card img {
        max-width: 120px;
    }

    .drink-card-title {
        font-size: 16px;
    }

    .drink-card-link {
        font-size: 14px;
    }
}

@media screen and (max-width: 480px) {
    .recipe-title {
        font-size: 40px;
        letter-spacing: -2px;
    }

    .ribbon {
        font-size: 12px;
        padding: 5px 10px;
    }

    .drink-card {
        width: 180px;
    }

    .drink-card img {
        max-width: 100px;
    }

    .drink-card-title {
        font-size: 14px;
    }

    .drink-card-link {
        font-size: 12px;
    }
}
</style>