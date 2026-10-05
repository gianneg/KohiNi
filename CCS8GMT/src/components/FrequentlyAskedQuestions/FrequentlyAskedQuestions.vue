<template>
    <div class="FAQBase">
        <p class="faq-eyebrow">Got questions?</p>
        <h3 id="FAQTitle">Most Popular Questions</h3>
        <div class="FAQContainer" >  
            <div class="FAQQuestion" v-for="faq in FAQs":key="faq.id" :class="{'active': faq.showans }">
                <p class="FAQQ" @click="ToggleDisplay(faq.id)"><span>{{ faq.Question }}</span><button class="FAQbtn" :aria-expanded="!!faq.showans" aria-label="Toggle answer" :class="{'BAct': faq.showans }">{{ faq.showans ? '&#9650;' : '&#9660;' }}</button></p>
                <div class="FAQAnswer" v-show="faq.showans">
                    <p>{{ faq.Answer }} <button class="playbtn" aria-label="Read answer aloud" @click.stop="TTSPlay(faq.id)">▷ Listen</button></p>
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
    </style>