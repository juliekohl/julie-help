import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from "@/pages/Dashboard.vue";
import Login from "@/pages/Login.vue";
// import Teams from "@/pages/Teams/Teams.vue";
import TeamsAll from "@/components/teams/TeamsAll.vue";
import TeamsView from "@/pages/Teams/TeamsView.vue";
// import TeamsEdit from "@/pages/Teams/TeamsEdit.vue";
import EditTeams from "@/components/teams/EditTeams.vue";
// import TeamsCreate from "@/pages/Teams/TeamsCreate.vue";
import NewTeams from "@/components/teams/NewTeams.vue";
// import Coworkers from "@/pages/Coworkers/Coworkers.vue";
import CoworkersView from "@/pages/Coworkers/CoworkersView.vue";
// import CoworkersEdit from "@/pages/Coworkers/CoworkersEdit.vue";
// import CoworkersCreate from "@/pages/Coworkers/CoworkersCreate.vue";
import CoworkersAll from "@/components/Coworkers/CoworkersAll.vue";
import NewCoworkers from "@/components/Coworkers/NewCoworkers.vue";
import EditCoworkers from "@/components/Coworkers/EditCoworkers.vue";

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
        component: TeamsAll
        // component: Teams
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
        // component: TeamsEdit
    },
    {
        path: '/teams/create',
        name: 'TeamsCreate',
        component: NewTeams
        // component: TeamsCreate
    },
    {
        path: '/coworkers',
        name: 'Coworkers',
        component: CoworkersAll
        // component: Coworkers
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
        // component: CoworkersEdit
    },
    {
        path: '/coworkers/create',
        name: 'CoworkersCreate',
        component: NewCoworkers
        // component: CoworkersCreate
    },
]

const index = createRouter({
    history,
    routes
})

export default index;