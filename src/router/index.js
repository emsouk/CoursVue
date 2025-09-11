// Ici on va créer une instance de router et config des routes
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/exercice1',
            name: 'exercice1',
            component: () => import('../views/exercices/exercice1.vue')
        },
        {
            path: '/exercicev-on',
            name: 'exercicev-on',
            component: () => import('../views/exercices/exercicev-on.vue')
        },
        {
            path: '/tpStyleDynamique',
            name: 'tpStyleDynamique',
            component: () => import('../views/tp/tpStyleDynamique.vue')
        }
       
    ]

});

export default router;