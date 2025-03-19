import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Table from '@/pages/Table.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/table',
        name: 'table',
        component: Table,
        meta: {
            title: '水位表'
        }
    },
    {
        path: '/story',
        name: 'story',
        component: () => import('@/pages/Story.vue'),
        meta: {
            title: '开发历程'
        }
    },
    {
        path: '/next',
        name: 'next',
        component: () => import('@/pages/Next.vue'),
        meta: {
            title: '下步计划'
        }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})