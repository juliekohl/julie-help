import {mount, RouterLinkStub} from "@vue/test-utils";
import OfficesCreate from "@/pages/Offices/OfficesCreate.vue";

const options = {
    global: {
        stubs: {
            RouterLink: RouterLinkStub
        }
    }
};

describe('New Offices', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(OfficesCreate, options);

        const officesCreate = wrapper.find('div.offices-create');
        expect(officesCreate.exists()).toBe(true);
    })

    it('should have an H1 containing New Coworker', () => {
        const wrapper = mount(OfficesCreate, options);

        const h1 = wrapper.find('h1.offices-create__heading');
        expect(h1.text()).toContain('Create Office');
    })

    it('should have add new coworker as button', () => {
        const wrapper = mount(OfficesCreate, options);

        const button = wrapper.find('button.offices-create__button');
        expect(button.exists()).toBe(true);
    })

    it('should have the form', () => {
        const wrapper = mount(OfficesCreate, options);

        const form = wrapper.find('Form.offices-create__form');
        expect(form.exists()).toBe(true);
    })

    it('should have label in the form', () => {
        const wrapper = mount(OfficesCreate, options);

        const label = wrapper.find('label.offices-create__label');
        expect(label.exists()).toBe(true);
    })

    it('should have input in the form', () => {
        const wrapper = mount(OfficesCreate, options);

        const input = wrapper.find('input.offices-create__input');
        expect(input.exists()).toBe(true);
    })
})
