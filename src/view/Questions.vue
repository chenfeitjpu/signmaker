<template>
    <section class="faqs">
        <div class="faqs-container">
            <header class="faqs-header">
                <h2>Frequently Asked Questions</h2>
            </header>
            <div class="faq-list">
                <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
                    <h3 class="faq-question" @click="toggleAnswer(index)">{{ faq.question }}</h3>
                    <div class="faq-answer" v-show="faq.visible">{{ faq.answer }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
    { question: 'What is Text to Music?', answer: 'Text to Music is a technology that converts written text into musical compositions using AI. With Remusic, you can easily turn your words into unique melodies.', visible: false },
    { question: 'How does the AI Text to Music Generator work?', answer: 'The AI analyzes your text, identifying patterns and emotions, and then generates a corresponding musical piece. Simply input your text, and let the AI create music for you.', visible: false },
    { question: 'Is the Text to Music tool free?', answer: "Yes, Remusic's Text to Music tool is completely free to use, offering all features without any cost.", visible: false },
    { question: 'What is Text to Music?', answer: 'Text to Music is a technology that converts written text into musical compositions using AI. With Remusic, you can easily turn your words into unique melodies.', visible: false },
    { question: 'How does the AI Text to Music Generator work?', answer: 'The AI analyzes your text, identifying patterns and emotions, and then generates a corresponding musical piece. Simply input your text, and let the AI create music for you.', visible: false }, 
]);

function toggleAnswer(index) {
    faqs.value[index].visible = !faqs.value[index].visible;
}
</script>

<style scoped>
.faqs {
    background-color: #e6f1ff;
    padding: 40px 20px;
}
.faqs-container {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 15px;
}
.faqs-header {
    text-align: center;
    margin-bottom: 20px;
}
.faq-list {
    flex-direction: column;
    margin: 0px auto;
    background-color: #ffffff;
}
.faq-item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1f2f3;
}   
.faq-question {
    line-height: 60px;
    background-color: #f9fafb;
    font-size: 18px;
    font-weight: 700;
    padding: 0 15px;
    cursor: pointer;
}
.faq-answer {
    padding: 0 15px;
    word-wrap: break-word;
}
</style>
