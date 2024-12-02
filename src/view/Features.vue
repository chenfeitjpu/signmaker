<template>
    <section class="features">
        <div class="feature-container">
            <div class="feature-header">
                <h2>Features Of Handwritten Signature Generator</h2>
            </div>
            <div class="feature-list">
                <div class="feature-item" v-for="(feature, index) in features" :key="index">
                    <h3 class="feature-title">{{ feature.title }}</h3>
                    <div class="feature-description">{{ feature.description }}</div>
                </div>
            </div>  
        </div>
    </section>
</template>
<script setup> 
import { ref } from 'vue';
const features = ref([
    { title: 'AI Powered', description: 'Turn your text into realistic handwriting in seconds with our AI-powered generator.' },
    { title: 'Unique And Creative', description: 'Our generator will create a creative, unique signature based on your name' },
    { title: 'Free and Accessible', description: "It's free to use, and you can download and access your handwritten signature anytime, anywhere." }
]);     
</script>
<style scoped>
.features {
    padding: 30px 0px;
}
.feature-container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
.feature-header {
    padding: 15px;
    text-align: center;
}
.feature-list{
    display: flex;
    justify-content: space-between;
}
.feature-item{
    flex: 1;
    border: 1px solid #cecece;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin: 10px;
    padding: 15px;
    background-color:  rgba(230, 241, 255, 0.3); 
}
.feature-title{
    margin-bottom: 10px;
}
</style>