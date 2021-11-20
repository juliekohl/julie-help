import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from "@/components/templates/Dashboard/Dashboard.vue";
import Login from "@/components/templates/Login/Login.vue";
// import Teams from "@/pages/Teams/Teams.vue";
import TeamsAll from "@/components/templates/Teams/TeamsAll.vue";
import TeamsView from "@/components/templates/Teams/TeamsView.vue";
// import TeamsEdit from "@/pages/Teams/TeamsEdit.vue";
import EditTeams from "@/components/templates/Teams/EditTeams.vue";
// import TeamsCreate from "@/pages/Teams/TeamsCreate.vue";
import NewTeams from "@/components/templates/Teams/NewTeams.vue";
// import Coworkers from "@/pages/Coworkers/Coworkers.vue";
import CoworkersView from "@/components/templates/Coworkers/CoworkersView.vue";
// import CoworkersEdit from "@/pages/Coworkers/CoworkersEdit.vue";
// import CoworkersCreate from "@/pages/Coworkers/CoworkersCreate.vue";
import AllCoworkers from "@/components/templates/Coworkers/AllCoworkers.vue";
import NewCoworkers from "@/components/templates/Coworkers/NewCoworkers.vue";
import EditCoworkers from "@/components/templates/Coworkers/EditCoworkers.vue";

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