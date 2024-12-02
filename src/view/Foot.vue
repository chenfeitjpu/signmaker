<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-nav">
                <div class="footer-left">
                    <img class="logo" src="../assets/logo_signmaker.png" alt="logo" />
                </div>
                <div class="footer-right">
                    <div class="footer-right-item">
                        <span class="footer-right-item-title">Products</span>
                        <div class="footer-right-item-content">
                            <a v-for="product in products" :key="product.name" :href="product.link" target="_blank">{{ product.name }}</a>
                        </div>
                    </div>
                    <div class="footer-right-item">
                        <span class="footer-right-item-title">Contact Us</span>
                        <div class="footer-right-item-content">
                            <a v-for="about in abouts" :key="about.name" :href="about.link" target="_blank">{{ about.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="site-statement">
                <p>Copyright 2024 SignMaker. All rights reserved. </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
    { name: 'Draw Signature', link: 'https://signmaker.io/' },
    { name: 'Type Signature', link: 'https://signmaker.io/type-signature' },
    { name: 'Logo Signature', link: 'https://signmaker.io/ai-logo-signature' },
    { name: 'Handwritten Signature', link: 'https://signmaker.io/ai-handwritten-signature-generator' }
]);

const abouts = ref([
    { name: 'Privacy and Cookies Policy', link: 'https://signmaker.io/privacy' },
    { name: 'Join Discord', link: 'https://discord.gg/vpcd4wk6' },
    { name: 'Email: apersonlized@gmail.com', link: 'mailto:apersonlized@gmail.com' }
]);
</script>
<style scoped>
.footer {
    padding: 20px 0;
}
.footer-container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
.footer-nav {
    display: flex;
    margin-bottom: 40px;
}
.footer-left {
    width: 200px;
}
.footer-left .logo {
    max-height: 100px;
    max-width: 100%;
}
.footer-right {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
}
.footer-right-item {
    padding: 0 20px;
}
.footer-right-item-title {
    display: block;
    margin-bottom: 10px;
}
.footer-right-item-content {
    display: flex;
    flex-direction: column;
}
.footer-right-item a {
    color: #777777;
    text-decoration: none;
    font-size: 18px;
}
.site-statement {
    border-top: 1px solid rgba(117, 117, 117, 0.09);
    text-align: center;
    padding-top: 20px;
}
</style>