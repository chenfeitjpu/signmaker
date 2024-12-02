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
    { question: 'How do I use this AI Handwritten Signature Generator?', answer: 'AI Handwritten Signature Generator is an online tool where you can create and download the handwriting image and use it freely anywhere.', visible: false },
    { question: 'Is this AI Handwritten Signature Generator free?', answer: 'Yes, you can use this AI Handwritten Signature Generator online for free.', visible: false },
    { question: 'Where can I use my handwritten signature?', answer: 'You can use the handwritten signature without any prior permission. You are free to incorporate these images in various ways, including email signatures, email marketing campaigns, websites, and PDFs.', visible: false},
    { question: "Can I change my handwritten signature once it's created?", answer: 'You can continue to modify the text or download the image to your local computer. Currently, our AI Handwritten Signature Generator does not support online modification.', visible: false},
    { question: 'Can I share my handwritten signature?', answer: 'Yes, our AI Handwritten Signature Generator allows you to copy your generated signature to the clipboard or download it as an PNG file, making it easy to share or use across multiple platforms and documents.', visible: false},
    { question: 'Can I download my generated handwritten signature?', answer: 'Yes, once your handwritten signature is created, you can easily download it in various formats.', visible: false},
    { question: 'How does ai handwritten signature generator work?', answer: 'It uses AI to analyze handwriting styles and produce digital signatures that mimic authentic handwriting based on user input.', visible: false},
]);

function toggleAnswer(index) {
    faqs.value[index].visible = !faqs.value[index].visible;
}
</script>

<style scoped>
.faqs {
    background-color: #e6f1ff;
    padding: 30px 20px;
}
.faqs-container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
}
.faqs-header {
    text-align: center;
    margin-bottom: 15px;
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
    font-weight: 40;
    padding: 0 15px;
    cursor: pointer;
}
.faq-answer {
    font-size: 16px;
    padding: 15px;
    word-wrap: break-word;
}
</style>
