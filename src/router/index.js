import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/handwritten'
    },
    {
        path: '/handwritten',
        component: () => import('../view/Handwritten.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router