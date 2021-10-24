import { createWebHistory, createRouter } from 'vue-router';

const history = createWebHistory(process.env.BASE_URL);

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => {
            console.log('Dashboard');
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => {
            console.log('Login');
        }
    },
    {
        path: '/teams',
        name: 'Teams',
        component: () => {
            console.log('Teams');
        }
    },
    {
        path: '/teams/:id',
        name: 'TeamView',
        component: () => {
            console.log('TeamView');
        }
    },
    {
        path: '/teams/:id/edit',
        name: 'TeamEdit',
        component: () => {
            console.log('TeamEdit');
        }
    },
    {
        path: '/teams/create',
        name: 'TeamCreate',
        component: () => {
            console.log('TeamCreate');
        }
    },
]

const index = createRouter({
    history,
    routes
})

export default index;