<template>
    <Head />
    <main>
        <section class="handwritten">
            <div class="handwritten-container">
                <div class="handwritten-header">
                    <h2 class="title">AI Handwritten Signature Generator</h2>
                    <p class="description">AI handwritten signature generator convert your signature into realistic handwriting.It's a free printable handwritten signature generator.</p>
                </div>
                <div class="handwritten-content">
                    <div class="handwritten-panel">
                        <svg class="canvas" id="canvas">
                            <path id="path" d=""></path>
                        </svg>
                        <div class="save" id="save-button">
                            <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
                                <title>Download</title>
                                <path d="m409.8 278.5-153.8 153.8-153.8-153.8 28.3-28.3 105.5 105.5v-355.7h40v355.7l105.5-105.5zm102.2 193.5h-512v40h512zm0 0"/>
                            </svg>
                        </div>
                    </div>
                    <div class="handwritten-input">
                        <div class="handwritten-input-text">
                            <input id="text-input" class="input" type="text"
                            placeholder="sign maker" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="30" autofocus/>
                        </div>
                        <button id="draw-button" class="button">Write</button>
                    </div>
                </div>
            </div>
            <div class="handwritten-slider">
                <span id="loading-indicator" style="display: none;"></span>
                <input id="speed-slider" type="hidden" min="0.6" max="9.51" value="2.49" step="0.1">
                <input id="width-slider" type="hidden" min="0.1" max="1.5" value="0.75" step="0.02">
                <input id="bias-slider" type="hidden" min="0.15" max="2.5" value="0.75" step="0.02">
                <select id="select-style" style="display: none;">
                    <option value="-">&ndash;</option>
                </select>
            </div>

        </section>
        <Features />
        <Questions />
    </main>
    <Foot />
</template>
<script setup>
// 在组件中动态加载外部 JS 文件
import { onMounted } from 'vue';

onMounted(() => {
    const script = document.createElement('script');
    script.src = '/js/handwriting.js?v=2';
    script.async = true;
    document.body.appendChild(script);
});
</script>
<style scoped>
.handwritten{
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    background-color: #e6f1ff;
}
.handwritten-container{
    width: 100%;
    max-width: 960px;
    padding: 15px;
    margin: 0 auto;
}
.handwritten-header{
    padding: 20px 10px;
}
.handwritten-header .title{
    text-align: center;
    margin: 1rem 0;
}
.handwritten-header .description{
    text-align: center;
}
.handwritten-content{
    padding: 10px;
}
.handwritten-panel{
    margin-bottom: 15px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    position: relative;
}
.handwritten-panel .canvas{
    border: 1px solid #2e83fb;
    border-radius: 10px;
    width: 60%;
    height: 40vh;   
    margin: 0 auto;
    background-color: white;
}
.handwritten-panel .save{
    width: 25px;
    height: 25px;
    position: absolute;
    right: 21%;
    bottom: 5px;
}
.handwritten-input{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
}
.handwritten-input-text{
    width: 100%;
    display: block;
}
.handwritten-input-text .input{
    width: 100%;
    height: 55px;
    border: 1px solid #2e83fb;
    border-radius: 8px 0 0 8px;
    padding: 0 15px;
    outline:0;
}
.handwritten-input .button{
    height: 55px;
    background-color: #2e83fb;
    border: none;
    border-radius: 0 8px 8px 0;
    padding: 10px 48px;
    color: white;
}
</style>

