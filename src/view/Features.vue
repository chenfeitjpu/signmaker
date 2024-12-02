<template>
    <section class="features">
        <div class="feature-container">
            <div class="feature-header">
                <h2>Features Of Handwritten Generation</h2>
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
    { title: 'Instant Text to Music Conversion', description: 'Turn your text into music in seconds with our AI-powered generator.' },
    { title: 'Effortless Creativity', description: 'No musical experience needed, our tool creates unique melodies from your words automatically.' },
    { title: 'Free and Accessible', description: 'Enjoy full access to all features for free, making music creation easy and affordable.' }
]);     
</script>
<style scoped>
.features {
    padding: 40px 0px;
    background-color: #f5fbff;
}
.feature-container {
    max-width: 720px;
    margin: 0 auto;
    padding: 0 10px;
}
.feature-header{
    padding: 15px;
}
.feature-list{
    display: flex;
    justify-content: space-between;
}
.feature-item{
    flex: 0 0 33.33%;
    max-width: 33.33%;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    background-color: #ffffff;
    margin: 10px;
    padding: 15px;
}
</style>