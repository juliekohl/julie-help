import {mount, RouterLinkStub} from "@vue/test-utils";
import Dashboard from "./Dashboard";
import {createStore} from "vuex";

jest.mock("c3", () => {
    return {
        randomColor: () => {
            return jest.fn();
        }
    }
});

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

const options = {
    global: {
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
        stubs: {
            RouterLink: RouterLinkStub
        }
    }
};

describe('Dashboard', () => {
    it('shows up currentUser name', () => {
        const wrapper = mount(Dashboard, options);

        expect(wrapper.text()).toContain('New User');
    });

    it('has the chart html tag', () => {
        const wrapper = mount(Dashboard, options);

        expect(wrapper.find('#chart').exists()).toBe(true);
    });
})
