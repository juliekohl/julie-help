import {mount, RouterLinkStub} from "@vue/test-utils";
import CoworkersShowAll from "@/pages/Coworkers/CoworkersShowAll.vue";
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

describe('CoworkersShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersShowAll, options);

        const coworkers = wrapper.find('div.show-all');
        expect(coworkers.exists()).toBe(true);
    })
})
