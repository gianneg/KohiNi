<template>
    <div class="video-section">
        This is where the video should be.
    </div>

    <div class="student-favorites">
        <h2 id="favorites-title">Student Favorites!</h2>
        <div class="cards">
            <div class="card" v-for="(item, index) in favoriteItems" :key="index">
                <div class="card-image">Photo</div>
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
    import DrinkCarousel from "../DrinkCarousel/DrinkCarousel.vue";

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
                    { title: "Caffeine-based Drinks", route: "/caffeine-drinks", image: "/img/caramelmacchiato.jpg" },
                    { title: "Non-caffeinated Drinks", route: "/non-caffeine-drinks", image: "/img/icedchocolatemilk.jpg" },
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
    @import "./HomepageBase.css"; /*Desktop*/
    @import "./HomepageTablet.css"; /*1024px*/
    @import "./HomepageLargeMobile.css"; /*768px*/
    @import "./HomepageSmallMobile.css"; /*480px*/
</style>