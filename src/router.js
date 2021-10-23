import { createWebHistory, createRouter } from 'vue-router';
import Login from "/src/components/Login";
import CoworkerRegister from "@/components/CoworkerRegister";
import CoworkingRegister from "@/components/CoworkingRegister";
import TeamRegister from "@/components/TeamRegister";

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