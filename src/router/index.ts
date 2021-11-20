import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from "@/components/templates/Dashboard/Dashboard.vue";
import Login from "@/components/templates/Login/Login.vue";
// import TeamsOld from "@/pages/TeamsOld/TeamsOld.vue";
import TeamsAll from "@/components/templates/Teams/TeamsAll.vue";
import TeamsView from "@/pages/TeamsOld/TeamsView.vue";
// import TeamsEdit from "@/pages/TeamsOld/TeamsEdit.vue";
import EditTeams from "@/components/templates/Teams/EditTeams.vue";
// import TeamsCreate from "@/pages/TeamsOld/TeamsCreate.vue";
import NewTeams from "@/components/templates/Teams/NewTeams.vue";
// import CoworkersOld from "@/pages/CoworkersOld/CoworkersOld.vue";
import CoworkersView from "@/pages/CoworkersOld/CoworkersView.vue";
// import CoworkersEdit from "@/pages/CoworkersOld/CoworkersEdit.vue";
// import CoworkersCreate from "@/pages/CoworkersOld/CoworkersCreate.vue";
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
    {
        path: '/TeamsOld',
        name: 'Teams',
        component: TeamsAll
        // component: TeamsOld
    },
    {
        path: '/TeamsOld/:id',
        name: 'TeamsView',
        component: TeamsView
    },
    {
        path: '/TeamsOld/:id/edit',
        name: 'TeamsEdit',
        component: EditTeams
        // component: TeamsEdit
    },
    {
        path: '/TeamsOld/create',
        name: 'TeamsCreate',
        component: NewTeams
        // component: TeamsCreate
    },
    {
        path: '/coworkers',
        name: 'Coworkers',
        component: AllCoworkers
        // component: CoworkersOld
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