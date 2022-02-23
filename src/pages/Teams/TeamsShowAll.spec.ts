import {mount, RouterLinkStub} from "@vue/test-utils";
import TeamsShowAll from "@/pages/Teams/TeamsShowAll.vue";
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

describe('TeamsShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsShowAll, options);

        const teams = wrapper.find('div.show-all');
        expect(teams.exists()).toBe(true);
    })
})
