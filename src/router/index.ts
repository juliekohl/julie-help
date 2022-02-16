import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from "@/pages/Dashboard/Dashboard.vue";
import Login from "@/components/templates/Login/Login.vue";
import CoworkersShowAll from "@/pages/Coworkers/CoworkersShowAll.vue";
import CoworkersShow from "@/pages/Coworkers/CoworkersShow.vue";
import CoworkersCreate from "@/pages/Coworkers/CoworkersCreate.vue";
import CoworkersUpdate from "@/pages/Coworkers/CoworkersUpdate.vue";
import OfficesShowAll from "@/pages/Offices/OfficesShowAll.vue";
import OfficesShow from "@/pages/Offices/OfficesShow.vue";
import OfficesCreate from "@/pages/Offices/OfficesCreate.vue";
import OfficesUpdate from "@/pages/Offices/OfficesUpdate.vue";
import PlansShowAll from "@/pages/Plans/PlansShowAll.vue";
import PlansShow from "@/pages/Plans/PlansShow.vue";
import PlansCreate from "@/pages/Plans/PlansCreate.vue";
import PlansUpdate from "@/pages/Plans/PlansUpdate.vue";
import TeamsShowAll from "@/pages/Teams/TeamsShowAll.vue";
import TeamsShow from "@/pages/Teams/TeamsShow.vue";
import TeamsCreate from "@/pages/Teams/TeamsCreate.vue";
import TeamsUpdate from "@/pages/Teams/TeamsUpdate.vue";
import CoworkingsUpdate from "@/pages/Coworkings/CoworkingsUpdate.vue";
import Register from "@/components/templates/Register/Register.vue";

const history = createWebHistory(process.env.BASE_URL);

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: "/register",
        name: 'Register',
        component: Register,
    },

    /**
     * Teams
     */

    {
        path: '/teams',
        name: 'TeamsShowAll',
        component: TeamsShowAll
    },
    {
        path: '/teams/:id',
        name: 'TeamsShow',
        component: TeamsShow
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
        name: 'CoworkersShowAll',
        component: CoworkersShowAll
    },
    {
        path: '/coworkers/:id',
        name: 'CoworkersShow',
        component: CoworkersShow
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

    {
        path: '/offices',
        name: 'OfficesShowAll',
        component: OfficesShowAll
    },
    {
        path: '/offices/:id',
        name: 'OfficesShow',
        component: OfficesShow
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

    /**
     * Plans
     */

    {
        path: '/plans',
        name: 'PlansShowAll',
        component: PlansShowAll
    },
    {
        path: '/plans/:id',
        name: 'PlansShow',
        component: PlansShow
    },
    {
        path: '/plans/create',
        name: 'PlansCreate',
        component: PlansCreate
    },
    {
        path: '/plans/:id/edit',
        name: 'PlansUpdate',
        component: PlansUpdate
    },

    /**
     * Coworkings
     */

    {
        path: '/coworkings/:id/edit',
        name: 'CoworkingsUpdate',
        component: CoworkingsUpdate
    },
]

const index = createRouter({
    history,
    routes
});

index.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
})

export default index;
