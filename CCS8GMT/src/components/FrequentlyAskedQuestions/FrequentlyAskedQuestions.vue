<template>
    <div class="FAQBanner">
        FREQUENTLY ASKED QUESTIONS.
    </div>
    <div class="FAQBase">
        <H3 id="FAQTitle">Most Popular Questions</H3>
        <div class="FAQContainer">  
            <div class="FAQQuestion">
                <p>TEST QUESTION<button class="FAQbtn" @click="ToggleDisplay()">&#9660;</button></p>
                <div class="FAQAnswer"  v-show="display">
                    <p>TEST ANSWER</p>
                </div>
            </div>

            <div class="FAQQuestion">
                <p>TEST QUESTION<button class="FAQbtn" @click="ToggleDisplay()">&#9660;</button></p>
                <div class="FAQAnswer" v-show="display">
                    <p>TEST ANSWER</p>
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
       data(){
        return{
            display:true
        }
       },

        methods: {
            ToggleDisplay(){
                this.display=!this.display;
            }
        },
    };
</script>


<style scoped>
    @import "./FrequentlyAskedQuestions.css";
</style>