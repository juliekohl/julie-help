import {mount, RouterLinkStub} from "@vue/test-utils";
import PlansUpdate from "@/pages/Plans/PlansUpdate.vue";

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

describe('Plans Update', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(PlansUpdate, options);

        const plansUpdate = wrapper.find('div.plans-update');
        expect(plansUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(PlansUpdate, options);

        const h1 = wrapper.find('h1.plans-update__heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(PlansUpdate, options);

        const button = wrapper.find('button.plans-update__button-edit');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(PlansUpdate, options);

        const form = wrapper.find('form.plans-update__form');
        expect(form.exists()).toBe(true);
    })
})
