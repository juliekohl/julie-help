import {mount, RouterLinkStub} from "@vue/test-utils";
import PlansShowAll from "@/pages/Plans/PlansShowAll.vue";
import {createStore} from "vuex";

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

describe('PlansShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(PlansShowAll, options);

        const plans = wrapper.find('div.show-all');
        expect(plans.exists()).toBe(true);
    })
})
