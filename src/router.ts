import { createWebHistory, createRouter } from 'vue-router';
import Login from "/src/components/Login.vue";
import CoworkerRegister from "./components/CoworkerRegister.vue";
import CoworkingRegister from "./components/CoworkingRegister.vue";
import TeamRegister from "./components/TeamRegister.vue";

const history = createWebHistory(process.env.BASE_URL);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/coworking',
        name: 'CoworkingRegister',
        component: CoworkingRegister
    },
    {
        path: '/team',
        name: 'TeamRegister',
        component: TeamRegister
    },
    {
        path: '/coworker',
        name: 'CoworkerRegister',
        component: CoworkerRegister
    }
    // {
    //     path: '/coworker',
    //     name: 'CoworkerRegister',
    //     component: () =>
    //         import('../components/CoworkerRegister')
    // }
]

const router = createRouter({
    history,
    routes
})

export default router;