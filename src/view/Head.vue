<template>
    <header class="sticky-header">
        <div class="logo">
            <img src="../assets/logo_signmaker.png" alt="Logo" />
        </div>
        <nav class="menu">
            <div class="dropdown">
                <span class="dropbtn">PRODUCTS</span>
                <div class="dropdown-content">
                    <!-- Add your product links here -->
                    <a href="#">Draw Signature</a>
                    <a href="#">Type Signature</a>
                    <a href="#">Logo Signature</a>
                    <a href="#">Handwritten Signature</a>
                </div>
            </div>
            <a href="#" class="blog-link">BLOG</a>
        </nav>
    </header>
</template>

<script setup>
// Add any necessary script here
</script>

<style scoped>
.sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    padding-left: 40px;
    display: flex;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.logo img {
    height: 40px;
}

.menu {
    display: flex;
    align-items: center;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropbtn {
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    color: black;
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 6px 10px;
    text-decoration: none;
    display: block;
    font-size: 12px;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.blog-link {
    text-decoration: none;
    color: black;
    font-size: 12px;
}
</style>