import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from "@/pages/Dashboard.vue";
import Login from "@/pages/Login.vue";
import Teams from "@/pages/Teams.vue";
import TeamsView from "@/pages/TeamsView.vue";
import TeamsEdit from "@/pages/TeamsEdit.vue";
import TeamsCreate from "@/pages/TeamsCreate.vue";

const history = createWebHistory(process.env.BASE_URL);

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/teams',
        name: 'Teams',
        component: Teams
    },
    {
        path: '/teams/:id',
        name: 'TeamsView',
        component: TeamsView
    },
    {
        path: '/teams/:id/edit',
        name: 'TeamsEdit',
        component: TeamsEdit
    },
    {
        path: '/teams/create',
        name: 'TeamsCreate',
        component: TeamsCreate
    },
]

const index = createRouter({
    history,
    routes
})

export default index;