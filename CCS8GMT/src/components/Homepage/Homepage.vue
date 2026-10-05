<template>
    <!-- Hero -->
    <section class="hero">
        <div class="beans" aria-hidden="true">
            <span class="bean" v-for="(bean, i) in beans" :key="i" :style="bean"></span>
        </div>

        <div class="hero-copy">
            <p class="eyebrow">Student-made coffee recipes</p>
            <h1 class="hero-title">Brew it <em>your</em> way.</h1>
            <p class="hero-sub">
                From velvety lattes to cozy caffeine-free sips, learn every drink step by step
                and even have the recipe read out loud while you brew.
            </p>
            <div class="hero-actions">
                <a class="btn btn-primary" @click="navigateTo('/CaffeinatedCoffee')">Explore coffee</a>
                <a class="btn btn-ghost" @click="navigateTo('/NonCaffeinatedDrinks')">Caffeine-free</a>
            </div>
            <ul class="hero-chips">
                <li>Hot &amp; iced</li>
                <li>Step-by-step</li>
                <li>Read-aloud recipes</li>
            </ul>
        </div>

        <div class="hero-cup" aria-hidden="true">
            <svg viewBox="0 0 400 420" class="cup-svg" role="img">
                <defs>
                    <clipPath id="cup-inside">
                        <path d="M96 176 H304 V232 C304 296 258 330 200 330 C142 330 96 296 96 232 Z" />
                    </clipPath>
                    <linearGradient id="cup-body" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stop-color="#fff8f0" />
                        <stop offset="1" stop-color="#e6d3bd" />
                    </linearGradient>
                    <linearGradient id="coffee" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stop-color="#8a5a35" />
                        <stop offset="1" stop-color="#3a1b0d" />
                    </linearGradient>
                </defs>

                <ellipse cx="200" cy="352" rx="150" ry="26" fill="#c1a088" opacity="0.35" />
                <ellipse cx="200" cy="344" rx="140" ry="24" fill="url(#cup-body)" />
                <ellipse cx="200" cy="340" rx="96" ry="14" fill="#e6d3bd" />

                <!-- handle -->
                <path d="M300 200 C362 196 366 284 296 280" fill="none" stroke="url(#cup-body)" stroke-width="18" stroke-linecap="round" />

                <!-- cup + coffee -->
                <path d="M90 170 H310 V232 C310 300 262 338 200 338 C138 338 90 300 90 232 Z" fill="url(#cup-body)" />
                <g clip-path="url(#cup-inside)">
                    <g class="liquid">
                        <rect x="80" y="176" width="240" height="170" fill="url(#coffee)" />
                        <g class="wave">
                            <path d="M0 178 q25 -10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 V200 H0 Z"
                                  fill="#8a5a35" opacity="0.9" transform="translate(40 -6)" />
                        </g>
                    </g>
                </g>
                <ellipse cx="200" cy="170" rx="110" ry="14" fill="#fff8f0" />
                <ellipse cx="200" cy="172" rx="98" ry="9" fill="#e6d3bd" />

                <!-- pour stream -->
                <rect class="stream" x="196" y="20" width="9" height="152" rx="4.5" fill="#5a2f16" />

                <!-- steam -->
                <g class="steam" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity="0.8">
                    <path class="wisp w1" d="M150 140 C132 118 168 104 150 80 C140 66 154 54 150 42" />
                    <path class="wisp w2" d="M200 132 C182 110 218 96 200 72 C190 58 204 46 200 34" />
                    <path class="wisp w3" d="M250 140 C232 118 268 104 250 80 C240 66 254 54 250 42" />
                </g>

                <!-- cup shine -->
                <path d="M118 200 C118 250 140 290 176 308" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity="0.7" />
            </svg>
            <div class="cup-glow"></div>
        </div>

        <a class="scroll-hint" @click="scrollToVideo" aria-label="Scroll down">
            <span></span>
        </a>
    </section>

    <!-- Marquee -->
    <div class="marquee" aria-hidden="true">
        <div class="marquee-track">
            <span v-for="(word, i) in marqueeWords" :key="i">{{ word }}<i></i></span>
            <span v-for="(word, i) in marqueeWords" :key="'b' + i">{{ word }}<i></i></span>
        </div>
    </div>

    <!-- Video -->
    <section class="showcase" ref="video" v-reveal>
        <div class="video-frame">
            <video class="banner-video" src="/videos/HomePage.mp4" autoplay loop muted playsinline controls></video>
        </div>
    </section>

    <!-- Favorites -->
    <section class="student-favorites">
        <div class="section-head" v-reveal>
            <p class="eyebrow">Fresh off the bar</p>
            <h2 id="favorites-title">Student Favorites</h2>
        </div>
        <div class="cards">
            <template v-if="loading">
                <div class="card skeleton" v-for="n in 3" :key="n"></div>
            </template>
            <article
                class="card"
                tabindex="0"
                v-for="(item, index) in favoriteItems"
                :key="item.id"
                v-reveal="index * 120"
                @click="$router.push(`/content/${item.id}`)"
                @keydown.enter="$router.push(`/content/${item.id}`)"
            >
                <span class="card-steam" aria-hidden="true"><i></i><i></i><i></i></span>
                <div class="card-photo-wrap"><div class="card-photo">
                    <img v-if="item.image" :src="item.image" :alt="item.title" loading="lazy" />
                    <span v-else class="card-photo-fallback">&#9749;</span>
                </div></div>
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-caption">View recipe <span>&rarr;</span></p>
            </article>
        </div>
    </section>

    <!-- Categories -->
    <section class="recipes">
        <div class="section-head" v-reveal>
            <p class="eyebrow">Browse recipes</p>
            <h2 class="recipe-title">Pick your pour</h2>
        </div>
        <div class="categories">
            <a
                class="drink-card"
                tabindex="0"
                v-for="(drink, index) in drinkCategories"
                :key="index"
                v-reveal="index * 150"
                @click="navigateTo(drink.route)"
                @keydown.enter="navigateTo(drink.route)"
            >
                <img :src="drink.image" :alt="drink.title" class="drink-card-image" loading="lazy" />
                <div class="drink-card-shade"></div>
                <div class="drink-card-text">
                    <span class="drink-card-tag">{{ drink.tag }}</span>
                    <h6 class="drink-card-title">{{ drink.title }}</h6>
                    <span class="drink-card-link">Browse recipes <b>&rarr;</b></span>
                </div>
            </a>
        </div>
    </section>

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
        const loading = ref(true);
        const video = ref(null);

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
                        image: data.image_url,
                    });
                });
                favoriteItems.value = fetchedItems;
            } catch (error) {
                console.error("Error fetching favorite drinks:", error);
            } finally {
                loading.value = false;
            }
        };

        onMounted(() => {
            fetchFavoriteDrinks();
        });

        const drinkCategories = [
            {
                title: "Caffeine-based Drinks",
                tag: "Wake up",
                route: "/CaffeinatedCoffee",
                image: "/img/caramelmacchiato.jpg"
            },
            {
                title: "Non-caffeinated Drinks",
                tag: "Wind down",
                route: "/NonCaffeinatedDrinks",
                image: "/img/icedchocolatemilk.jpg"
            },
        ];

        // Floating coffee beans: position, size, speed and drift per bean
        const beans = [
            { left: "2%",  top: "6%", "--s": "26px", "--r": "20deg",  "--d": "7s",  "--dx": "16px" },
            { left: "16%", top: "72%", "--s": "18px", "--r": "-30deg", "--d": "9s",  "--dx": "-12px" },
            { left: "44%", top: "10%", "--s": "20px", "--r": "60deg",  "--d": "8s",  "--dx": "10px" },
            { left: "52%", top: "84%", "--s": "28px", "--r": "-10deg", "--d": "10s", "--dx": "-18px" },
            { left: "90%", top: "14%", "--s": "24px", "--r": "35deg",  "--d": "7.5s", "--dx": "-14px" },
            { left: "94%", top: "66%", "--s": "16px", "--r": "-50deg", "--d": "9.5s", "--dx": "12px" },
        ];

        const marqueeWords = ["Espresso", "Macchiato", "Latte", "Cold brew", "Mocha", "Frappe", "Cinnamon tea", "Apple cider"];

        const navigateTo = (route) => {
            router.push(route);
        };

        const scrollToVideo = () => {
            video.value?.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        return {
            favoriteItems,
            loading,
            video,
            beans,
            marqueeWords,
            drinkCategories,
            navigateTo,
            scrollToVideo
        };
    }
};
</script>

<style scoped>
    @import "./Homepage.css";
</style>
