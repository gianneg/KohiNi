<template>
    <div class="video-section">
        This is where the video should be.
    </div>

    <div class="student-favorites">
        <h2 id="favorites-title">Student Favorites!</h2>
        <div class="cards">
            <div class="card">
                Photo
                <h5>Title</h5>
                <p>Caption</p>
            </div>
            <div class="card">
                Photo
                <h5>Title</h5>
                <p>Caption</p>
            </div>
            <div class="card">
                Photo
                <h5>Title</h5>
                <p>Caption</p>
            </div>
        </div>
    </div>

    <div class="recipes">
        <h2 class="recipe-title">RECIPES</h2>
        <div class="ribbon">
            <p>Browse recipes by category!</p>
        </div>
        <div class="drink-card">
            <img src="">
            <div class="drink-card-text">
                <h6 class="drink-card-title">Caffeine-based Drinks</h6>
                <a>Browse Recipes ></a>
            </div>
        </div>
        <div class="drink-card">
            <img src="">
            <div class="drink-card-text">
                <h6 class="drink-card-title">Caffeine-based Drinks</h6>
                <a>Browse Recipes ></a>
            </div>
        </div>
    </div>

    <div class="pick-a-drink">
        Pick a drink
    </div>
</template>

<style>
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

.pick-a-drink {
    background-color: #C1A088;
}

#favorites-title {

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
</style>