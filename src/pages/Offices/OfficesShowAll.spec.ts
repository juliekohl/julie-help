import {mount, RouterLinkStub} from "@vue/test-utils";
import OfficesShowAll from "@/pages/Offices/OfficesShowAll.vue";
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


describe('OfficesShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(OfficesShowAll, options);

        const offices = wrapper.find('div.show-all');
        expect(offices.exists()).toBe(true);
    })
})
