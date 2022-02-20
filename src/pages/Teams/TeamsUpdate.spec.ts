import {mount, RouterLinkStub} from "@vue/test-utils";
import TeamsUpdate from "@/pages/Teams/TeamsUpdate.vue";

jest.mock('vue-router', () => {
    return {
        useRouter: jest.fn(() => ({
            currentRoute: {
                value: {
                    params: {
                        id: 1
                    }
                }
            },
        }))
    };
});

const options = {
    global: {
        stubs: {
            RouterLink: RouterLinkStub
        }
    }
};

describe('Teams Update', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsUpdate, options);

        const teamsUpdate = wrapper.find('div.teams-update');
        expect(teamsUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(TeamsUpdate, options);

        const h1 = wrapper.find('h1.teams-update__heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(TeamsUpdate, options);

        const button = wrapper.find('button.teams-update__button-edit');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(TeamsUpdate, options);

        const form = wrapper.find('form.teams-update__form');
        expect(form.exists()).toBe(true);
    })
})
