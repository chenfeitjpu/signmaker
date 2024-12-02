<template>
    <header class="header">
        <nav class="nav">
            <div class="nav-left">
                <img class="logo" src="../assets/logo_signmaker.png" alt="SignMaker">
            </div>
            <section class="nav-right">
                <span class="nav-right-divider"></span>
                <ul class="nav-right-list">
                    <li class="nav-right-item">
                        <span class="nav-right-text">
                            PRODUCTS
                            <span class="arrow"></span>
                        </span>
                        <nav class="nav-right-dropdown">
                            <li v-for="item in products" :key="item.name" class="nav-right-dropdown-item">
                                <a :href="item.link" target="_blank">
                                    {{ item.name }}
                                </a>
                            </li>
                        </nav>
                    </li>
                    <li class="nav-right-item">
                        <span class="nav-right-text">
                            <a href="https://signmaker.io/blog" target="_blank">BLOG</a>
                        </span>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
    { name: 'Draw Signature', link: 'https://signmaker.io/' },
    { name: 'Type Signature', link: 'https://signmaker.io/type-signature' },
    { name: 'Logo Signature', link: 'https://signmaker.io/ai-logo-signature' },
    { name: 'Handwritten Signature', link: 'https://signmaker.io/ai-handwritten-signature-generator' }
]);
</script>

<style scoped>
.header {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1;
    background-color: #ffffff;
    box-shadow: 0 10px 10px -6px rgba(170,170,170,0.5);
    display: flex;
    justify-content: center;
}   
.nav {
    height: 60px;
    width: 100%;
    max-width: 960px;
    display: flex;
}
.nav-left {
    display: flex;
    align-items: center;
}
.nav-left .logo {
    max-height: 60px;
}
.nav-right {
    display: flex;
    align-items: center;
}
.nav-right-divider {
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: #000000;
    margin: 0 1rem;
}
.nav-right-list {
    height: 60px;
    list-style: none;
    display: flex;
    align-items: center;
}
.nav-right-item {
    line-height: 60px;
}
.nav-right-text {
    margin: 0 10px;
    cursor: pointer;
    font-size: 0.75em;
}
.nav-right-text .arrow {
    display: inline-block;
    width: 0px;
    height: 0px;
    border-top:  3px solid #000000;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    margin-bottom:3px;
}
.nav-right-text a{
    text-decoration: none;
    color: #000000;
}
.nav-right-dropdown {
    display: none;
    flex-direction: column;
    z-index: 10000;
    position: absolute;
    background-color: #ffffff;
}
.nav-right-item:hover .nav-right-dropdown {
    display: flex;
}
.nav-right-dropdown-item a{
    line-height: 40px;
    padding: 0 10px;
    font-size: 0.75em;
    text-decoration: none;
    color: rgba(117, 117, 117, 0.8);
    white-space: nowrap;
    display: block;
}
.nav-right-dropdown-item a:hover{
    background-color: #f5f5f5;
}

</style>
