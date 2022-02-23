import {createStore} from "vuex";
import {RouterLinkStub} from "@vue/test-utils";

export const mountOptions = {
    global: {
        provide: {
            store: createStore({
                state: {
                    auth: {
                        user: {}
                    }
                }
            })
        },
        stubs: {
            RouterLink: RouterLinkStub
        }
    }
};