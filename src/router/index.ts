import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from "@/components/templates/Dashboard/Dashboard.vue";
import Login from "@/components/templates/Login/Login.vue";
import TeamsAll from "@/components/templates/Teams/TeamsRetrieveAll.vue";
import TeamsView from "@/components/templates/Teams/TeamsRetrieveSingle.vue";
import EditTeams from "@/components/templates/Teams/TeamsUpdate.vue";
import NewTeams from "@/components/templates/Teams/TeamsCreate.vue";
import CoworkersView from "@/components/templates/Coworkers/CoworkersRetrieveSingle.vue";
import AllCoworkers from "@/components/templates/Coworkers/CoworkersRetrieveAll.vue";
import NewCoworkers from "@/components/templates/Coworkers/CoworkersCreate.vue";
import EditCoworkers from "@/components/templates/Coworkers/CoworkersUpdate.vue";

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

    /**
     * Teams
     */

    {
        path: '/teams',
        name: 'Teams',
        component: TeamsAll
    },
    {
        path: '/teams/:id',
        name: 'TeamsView',
        component: TeamsView
    },
    {
        path: '/teams/:id/edit',
        name: 'TeamsEdit',
        component: EditTeams
    },
    {
        path: '/teams/create',
        name: 'TeamsCreate',
        component: NewTeams
    },

    /**
     * Coworkers
     */

    {
        path: '/coworkers',
        name: 'Coworkers',
        component: AllCoworkers
    },
    {
        path: '/coworkers/:id',
        name: 'CoworkersView',
        component: CoworkersView
    },
    {
        path: '/coworkers/:id/edit',
        name: 'CoworkersEdit',
        component: EditCoworkers
    },
    {
        path: '/coworkers/create',
        name: 'CoworkersCreate',
        component: NewCoworkers
    },
]

const index = createRouter({
    history,
    routes
})

export default index;