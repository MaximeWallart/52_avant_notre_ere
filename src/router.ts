import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Maison from './pages/Maison.vue'
import ConnexionPage from './pages/ConnexionPage.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/:lanisteid', component: Maison, props: true},
    { path: '/', component: ConnexionPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router