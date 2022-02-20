import {mount, RouterLinkStub} from "@vue/test-utils";
import OfficesUpdate from "@/pages/Offices/OfficesUpdate.vue";

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

describe('Offices Update', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(OfficesUpdate, options);

        const officesUpdate = wrapper.find('div.offices-update');
        expect(officesUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(OfficesUpdate, options);

        const h1 = wrapper.find('h1.offices-update__heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(OfficesUpdate, options);

        const button = wrapper.find('button.offices-update__button-edit');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(OfficesUpdate, options);

        const form = wrapper.find('form.offices-update__form');
        expect(form.exists()).toBe(true);
    })
})
