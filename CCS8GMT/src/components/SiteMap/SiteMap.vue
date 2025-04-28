<template>
    <div class="SMBase">
        <h1 id="SMTitle">Site Map</h1>
        <div class="SMContainer">  
            <div class="SMItem">
                <h4 class="SMHeader">About</h4>
                <p class="SMLink" @click="navigate('/about')">About Us</p>
                <p class="SMLink" @click="navigate('/contact')">Contact Us</p>
            </div>
            <div class="SMItem">
                <h4 class="SMHeader">Frequently Asked Questions</h4>
                <p class="SMLink" @click="navigate('/faq')">FAQ</p>
            </div>
            <div class="SMItem">
                <h4 class="SMHeader">Recipies</h4>
                <p class="SMLink" @click="navigate('/CaffeinatedCoffee')">Caffeinated Drinks</p>
                <p class="SMLink" @click="navigate('/NonCaffeinatedDrinks')">Non-Caffeinated Drinks</p>
            </div>
            <div class="SMItem">
                <h4 class="SMHeader">Site Navigation</h4>
                <p class="SMLink" @click="navigate('/site-map')">Site Map</p>
                <p class="SMLink" @click="navigate('/')">Home</p>
            </div>
        </div>
    </div>
</template>

<script>
 export default{
    methods: {
      navigate(route) {
        this.$router.push(route);
      },
 }
}

</script>

<style scoped>
    @import "./SiteMap.css";
</style>