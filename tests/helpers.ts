import {createStore} from "vuex";
import {RouterLinkStub} from "@vue/test-utils";

export const mountOptionsGlobal = {
    stubs: {
        RouterLink: RouterLinkStub
    }
};

export const mountOptions = {
    global: {
        stubs: {
            RouterLink: RouterLinkStub
        },
        provide: {
            store: createStore({
                state: {
                    auth: {
                        user: {
                            name: 'New User'
                        }
                    }
                }
            })
        },
    }
};

export const mountOptionsGlobalWithMocks = {
    global: {
        stubs: {
            RouterLink: RouterLinkStub
        },
        mocks: {
            $store: {
                state: {
                    auth: {
                        status: {
                            loggedIn: true
                        }
                    }
                }
            },
            $router: {
                push: jest.fn(),
            }
        }
    },
};
