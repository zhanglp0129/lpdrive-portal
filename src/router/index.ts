import {createRouter, createWebHistory} from "vue-router";

// 创建路由器
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: () => import('../views/login/index.vue')
        }
    ]
})