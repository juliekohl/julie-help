import {mount} from "@vue/test-utils";
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

describe('Offices Update', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(OfficesUpdate);

        const officesUpdate = wrapper.find('div.offices-update');
        expect(officesUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(OfficesUpdate);

        const h1 = wrapper.find('h1.offices-update__heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(OfficesUpdate);

        const button = wrapper.find('button.offices-update__button-edit');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(OfficesUpdate);

        const form = wrapper.find('form.offices-update__form');
        expect(form.exists()).toBe(true);
    })
})
