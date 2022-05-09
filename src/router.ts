import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Maison from './pages/Maison.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Maison}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router