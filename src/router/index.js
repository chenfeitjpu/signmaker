import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/calligraphy'
    },
    {
        path: '/handwritten',
        component: () => import('../view/Handwritten.vue')
    },
    {
        path: '/calligraphy',
        component: () => import('../view/Calligraphy.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router