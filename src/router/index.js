import { createWebHistory, createRouter } from 'vue-router';

import ComingSoon from '@/pages/ComingSoon.vue';
import PageNotFound from '@/pages/PageNotFound.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL
    ),
    routes : [
        {
            path: '/',
            component: ComingSoon,
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'PageNotFound', 
            component: PageNotFound
        },
    ],
    scrollBehaviour(to, from, savedPosition) {
        return { top: 0 } //always scroll to top
    },
});

export default router;