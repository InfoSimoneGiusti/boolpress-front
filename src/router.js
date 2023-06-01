import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/contattami',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/blog',
                name: 'posts',
                component: PostList
            },
            {
                path: '/blog/:cicciobello',
                name: 'single-post',
                component: SinglePost
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'not-found',
                component: NotFound
            }
        ]
    }
);

export { router };