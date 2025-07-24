import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/pages/Home.vue';

import Rasian from '@/pages/Rasian.vue';
import HauriAyangan from '@/pages/HauriAyangan.vue';

import ComingSoon from '@/pages/ComingSoon.vue';
import PageNotFound from '@/pages/PageNotFound.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL
    ),
    routes : [
        {
            path: '/',
            component: Home,
            meta: { title: 'Raksi'}
        },
        {
            path: '/rasian',
            component: Rasian,
            meta: { title: 'Rasian | Raksi'}
        },
        {
            path: '/hauri-ayangan',
            component: HauriAyangan,
            meta: { title: 'HauriAyangan | Raksi'}
        },
        {
            path: '/coming-soon',
            component: ComingSoon,
            meta: { title: 'Coming Soon | Raksi'}
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'PageNotFound', 
            component: PageNotFound,
            meta: { title: 'Page not Found | Raksi'}
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 } //always scroll to top
    },
});

// Watch for route changes and update the document title
router.afterEach((to) => {
    document.title = to.meta.title || 'Default Title';
});

export default router;