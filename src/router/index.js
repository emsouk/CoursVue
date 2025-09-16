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
        },
        {
            path: '/exercicev-if',
            name: 'exercicev-if',
            component: () => import('../views/exercices/exerciceV-if.vue')
        },
        {
            path: '/components_lifecycle',
            name: 'components_lifecycle',
            component: () => import('../views/exercices/components_lifecycle.vue')
        },
      
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: () => import('../components/HelloWorld.vue')
        },
        {
            path: '/props',
            name: 'props',
            component: () => import('../components/props.vue')
        },
        {
            path: '/LikeButton',
            name: 'LikeButton',
            component: () => import('../components/LikeButton.vue')
        },
        {
            path: '/OnFriends',
            name: 'OnFriends',
            component: () => import('../components/Onfriends.vue')
        }
    ]

});

export default router;