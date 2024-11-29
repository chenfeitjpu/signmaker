<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-logo">
                <img src="../assets/logo_signmaker.png" alt="Logo" />
            </div>
            <div class="footer-info">
                <div class="footer-products">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="#">Draw Signature</a></li>
                        <li><a href="#">Type Signature</a></li>
                        <li><a href="#">Logo Signature</a></li>
                        <li><a href="#">Handwritten Signature</a></li>
                    </ul>
                </div>
                <div class="footer-about">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
// Add any necessary script here
</script>

<style scoped>
.footer {
    background-color: #fafafa;
    padding: 20px 0;
    display: flex;
    justify-content: center; /* Center the content horizontally */
}

.footer-content {
    display: flex;
    justify-content: space-around; /* Distribute space between items */
    align-items: flex-start; /* Align items to the top */
    width: 80%; /* Adjust width as needed */
    gap: 20px; /* Add gap between modules */
}

.footer-logo {
    flex: 1; /* Smaller width for the logo */
    display: flex;
    align-items: flex-start; /* Align content to the top */
}

.footer-logo img {
    height: 60px;
     background-color: #fafafa;
}

.footer-info {
    flex: 3; /* Container for products and about */
    display: flex;
    justify-content: flex-start; /* Align items to the start */
    gap: 10px; /* Reduce gap between products and about */
}

.footer-products {
    display: flex;
    flex-direction: column; /* Display items vertically */
    align-items: flex-start; /* Align content to the top */
    margin-right: 40px; /* Add margin to the right of products */
}

.footer-about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-products h3, .footer-about h3 {
    margin-bottom: 10px;
    font-size: 14px; /* Smaller font size for headings */
}

.footer-products ul, .footer-about ul {
    list-style: none;
    padding: 0;
}

.footer-products li, .footer-about li {
    margin-bottom: 5px;
    font-size: 12px; /* Smaller font size for list items */
}

.footer-products a, .footer-about a {
    text-decoration: none;
    color: black;
    font-size: 12px; /* Smaller font size for links */
}
</style>