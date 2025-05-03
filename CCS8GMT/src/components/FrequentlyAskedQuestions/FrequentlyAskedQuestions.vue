<template>
    <div class="FAQBanner">
        FREQUENTLY ASKED QUESTIONS.
    </div>
    <div class="FAQBase">
        <h3 id="FAQTitle">Most Popular Questions</h3>
        <div class="FAQContainer">  
            <div class="FAQQuestion" v-for="faq in FAQs":key="faq.id" :class="{'active': faq.showans }">
                <p>{{ faq.Question }}<button class="FAQbtn" @click="ToggleDisplay(faq.id)" :class="{'BAct': faq.showans }">{{ faq.showans ? '&#9650;' : '&#9660;' }}</button></p>
                <div class="FAQAnswer" v-show="faq.showans">
                    <p>{{ faq.Answer }} <button class="playbtn" @click="TTSPlay(faq.id)">▷</button></p>
                </div>
            </div>
        </div>
    </div>
    <DrinkCarousel />
</template>

<script>
    import DrinkCarousel from "../DrinkCarousel/DrinkCarousel.vue";
    import { db } from "@/lib/firebase";
    import { collection, getDocs } from "firebase/firestore";

    
    export default {
        components: { DrinkCarousel }
        ,
       data(){
        return{
            FAQs: [],
        }
       },

        methods: {
            async fetchfaq() {
            try {
            const snapshot = await getDocs(collection(db, "FAQ"));
            this.FAQs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                showAnswer: false,
                }));
            } catch (error) {
            console.error("Error fetching data:", error);
            }
            },

            ToggleDisplay(id){
                const faq = this.FAQs.find(faq => faq.id === id);
                if (faq) {
                    faq.showans = !faq.showans;
                } 
            },
            TTSPlay(id){
                try{
                const faq = this.FAQs.find(faq => faq.id === id);
                const Utterance = new SpeechSynthesisUtterance(faq.Answer);
                speechSynthesis.speak(Utterance);
                }catch (error) {
                    console.error("Error reading data:", error);
                    }
      },

        },
        mounted(){
            this.fetchfaq();
        }
         };
</script>


<style scoped>
    @import "./FrequentlyAskedQuestions.css";
    @import "./FrequentlyAskedQuestionsMobile.css";
</style>