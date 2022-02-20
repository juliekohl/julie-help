import AuthService from '../services/auth.service';

const user: {} = JSON.parse(localStorage.getItem('user') ?? '{}');

const initialState = Object.keys(user).length !== 0
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        async login({ commit }, user) {
            try {
                const response = await AuthService.login(user);
                commit('loginSuccess', response);
                return response;
            } catch (err) {
                commit('loginFailure');
                return Promise.reject();
            }
        },

        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        },

        async register({ commit }, user) {
            try {
                const response = await AuthService.register(user);
                commit('registerSuccess', response);
                return response;
            } catch (err) {
                commit('registerFailure');
                return err;
            }
        },
    },

    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },

        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },

        registerSuccess(state) {
            state.status.loggedIn = false;
        },

        registerFailure(state) {
            state.status.loggedIn = false;
        }
    }
};
