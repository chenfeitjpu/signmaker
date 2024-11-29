<template>
    <section class="faqs">
        <h2>FAQs</h2>
        <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleAnswer(index)">
                <span>{{ faq.question }}</span>
            </div>
            <div class="faq-answer" :class="{ hidden: !faq.showAnswer }">
                <p>{{ faq.answer }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
    { question: 'What is your return policy?', answer: 'We offer a 30-day return policy on all items. Please contact our support for more details.', showAnswer: false },
    { question: 'How can I track my order?', answer: 'You can track your order using the tracking link sent to your email after purchase.', showAnswer: false },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship to most countries worldwide. Shipping fees and times vary by location.', showAnswer: false }
]);

function toggleAnswer(index) {
    faqs.value[index].showAnswer = !faqs.value[index].showAnswer;
}
</script>

<style scoped>
.faqs {
    margin: 20px auto;
    border-radius: 8px;
    max-width: 768px; /* Center the module and limit its width */
    font-size: 12px;
}

.faqs h2 {
    font-size: 16px; /* Adjusted font size */
    margin-bottom: 20px;
    text-align: center;
}

.faq-question {
    background-color: #f9fafb;
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}

.faq-answer {
    background-color: #ffffff;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.faq-answer.hidden {
    display: none; /* Hide when not active */
}

.faq-item h3 {
    font-size: 12px; /* Adjusted font size */
    margin: 0;
}

.faq-item p {
    font-size: 12px; /* Adjusted font size */
    margin: 0;
}

hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 10px 0;
}
</style>