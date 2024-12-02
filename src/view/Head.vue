<template>
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
                        <li class="nav-right-dropdown-item">
                            <a href="">
                                Draw Signature
                            </a>
                        </li>
                        <li class="nav-right-dropdown-item">
                            <a href="">
                                Type Signature
                            </a>
                        </li>
                        <li class="nav-right-dropdown-item">
                            <a href="">
                                Logo Signature
                            </a>
                        </li>
                         <li class="nav-right-dropdown-item">
                            <a href="">
                                Handwritten Signature
                            </a>
                        </li>
                    </nav>
                </li>
                 <li class="nav-right-item">
                    <span class="nav-right-text">
                        BLOG
                    </span>
                </li>
            </ul>
        </section>
    </nav>
</template>

<script setup>
</script>

<style scoped>
.nav {
    position: fixed;
    top: 0px;
    height: 60px;
    background-color: #ffffff;
    box-shadow: 0 10px 10px -6px rgba(170,170,170,0.5);
    padding: 0 2rem;
    display: flex;
    width: 100%;
    z-index: 1;
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
    list-style: none;
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
    position: relative;
}
.nav-right-item {
    height: 60px;
    position: relative;
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
    margin-bottom:2px;
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
