import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from "@/components/templates/Dashboard/Dashboard.vue";
import Login from "@/components/templates/Login/Login.vue";
import TeamsRetrieveAll from "@/pages/Teams/TeamsRetrieveAll.vue";
import TeamsRetrieveSingle from "@/components/templates/TeamsOld/TeamsRetrieveSingle.vue";
import TeamsCreate from "@/components/templates/TeamsOld/TeamsCreate.vue";
import TeamsUpdate from "@/components/templates/TeamsOld/TeamsUpdate.vue";
import CoworkersRetrieveAll from "@/pages/Coworkers/CoworkersRetrieveAll.vue";
import CoworkersRetrieveSingle from "@/pages/Coworkers/CoworkersRetrieveSingle.vue";
import CoworkersCreate from "@/pages/Coworkers/CoworkersCreate.vue";
import CoworkersUpdate from "@/pages/Coworkers/CoworkersUpdate.vue";
import OfficesRetrieveAll from "@/pages/Offices/OfficesRetrieveAll.vue";
import OfficesRetrieveSingle from "@/pages/Offices/OfficesRetrieveSingle.vue";
import OfficesCreate from "@/pages/Offices/OfficesCreate.vue";
import OfficesUpdate from "@/pages/Offices/OfficesUpdate.vue";

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
        name: 'TeamsRetrieveAll',
        component: TeamsRetrieveAll
    },
    {
        path: '/teams/:id',
        name: 'TeamsRetrieveSingle',
        component: TeamsRetrieveSingle
    },
    {
        path: '/teams/create',
        name: 'TeamsCreate',
        component: TeamsCreate
    },
    {
        path: '/teams/:id/edit',
        name: 'TeamsUpdate',
        component: TeamsUpdate
    },

    /**
     * Coworkers
     */

    {
        path: '/coworkers',
        name: 'CoworkersRetrieveAll',
        component: CoworkersRetrieveAll
    },
    {
        path: '/coworkers/:id',
        name: 'CoworkersRetrieveSingle',
        component: CoworkersRetrieveSingle
    },
    {
        path: '/coworkers/create',
        name: 'CoworkersCreate',
        component: CoworkersCreate
    },
    {
        path: '/coworkers/:id/edit',
        name: 'CoworkersUpdate',
        component: CoworkersUpdate
    },

    /**
     * Offices
     */
    //
    {
        path: '/offices',
        name: 'OfficesRetrieveAll',
        component: OfficesRetrieveAll
    },
    {
        path: '/offices/:id',
        name: 'OfficesRetrieveSingle',
        component: OfficesRetrieveSingle
    },
    {
        path: '/offices/create',
        name: 'OfficesCreate',
        component: OfficesCreate
    },
    {
        path: '/offices/:id/edit',
        name: 'OfficesUpdate',
        component: OfficesUpdate
    },
]

const index = createRouter({
    history,
    routes
})

export default index;
