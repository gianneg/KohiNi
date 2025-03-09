<template>
    <div class="video-section">
        This is where the video should be.
    </div>

    <div class="student-favorites">
        <h2 id="favorites-title">Student Favorites!</h2>
        <div class="cards">
            <div class="card">
                Photo
                <h5 class="card-title">Title</h5>
                <p class="card-caption">Caption</p>
            </div>
            <div class="card">
                Photo
                <h5 class="card-title">Title</h5>
                <p class="card-caption">Caption</p>
            </div>
            <div class="card">
                Photo
                <h5 class="card-title">Title</h5>
                <p class="card-caption">Caption</p>
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
            <div class="drink-card">
                <img src="">
                <div class="drink-card-text">
                    <h6 class="drink-card-title">Caffeine-based Drinks</h6>
                    <a class="drink-card-link">Browse Recipes ></a>
                </div>
            </div>
            <div class="drink-card">
                <img src="">
                <div class="drink-card-text">
                    <h6 class="drink-card-title">Caffeine-based Drinks</h6>
                    <a class="drink-card-link">Browse Recipes ></a>
                </div>
            </div>
        </div>
    </div>

    <div class="pick-a-drink">
        Pick a drink
    </div>
</template>

<style>
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
}

.ribbon {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 20px;
    background-color: #556B2F;
    color: #FFFFFF;
}

.pick-a-drink {
    background-color: #C1A088;
}

#favorites-title {
    font-family: "Raleway", sans-serif;
    font-size: 40px;
    color: #492310;
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

.drink-card-title {
    font-family: "Platypi", serif;
    font-style: italic;
    font-weight: 100;
    font-size: 20px;
    color: #634832;
}

.drink-card-link {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 20px;
}
</style>