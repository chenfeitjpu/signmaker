<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-left">
                <img class="logo" src="../assets/logo_signmaker.png" alt="logo" />
            </div>
            <div class="footer-right">
                <div class="footer-right-item">
                    <span class="footer-right-item-title">Products</span>
                    <div class="footer-right-item-content">
                        <a href="">Draw Signature</a>
                        <a href="">Type Signature</a>
                        <a href="">Logo Signature</a>
                        <a href="">Handwritten Signature</a>
                    </div>
                </div>
                <div class="footer-right-item">
                    <span class="footer-right-item-title">Contact Us</span>
                    <div class="footer-right-item-content">
                        <a href="">Blog</a>
                        <a href="">Pricing</a>
                        <a href="">FAQ</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-statement">
            <p>Copyright 2024 SignMaker. All rights reserved. </p>
        </div>
    </footer>
</template>

<script setup>
// Add any necessary script here
</script>

<style scoped>
.footer {
    border-top: 1px solid #f1f2f3;
    padding: 20px 0;
}
.footer-container {
    display: flex;
    margin-bottom: 40px;
}
.footer-left {
    margin-left: 100px;
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
    margin-bottom: 15px;
}
.footer-right-item-content {
    display: flex;
    flex-direction: column;
}
.footer-right-item a {
    color: #777777;
    text-decoration: none;
}
.site-statement {
    border-top: 1px solid rgba(117, 117, 117, 0.09);
    text-align: center;
    padding-top: 20px;
}
</style>