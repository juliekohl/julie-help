import {mount} from "@vue/test-utils";
import OfficesCreate from "@/pages/Offices/OfficesCreate.vue";

describe('New Offices', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(OfficesCreate);

        const officesCreate = wrapper.find('div.offices-create');
        expect(officesCreate.exists()).toBe(true);
    })

    it('should have an H1 containing New Coworker', () => {
        const wrapper = mount(OfficesCreate);

        const h1 = wrapper.find('h1.offices-create__heading');
        expect(h1.text()).toContain('Create Office');
    })

    it('should have add new coworker as button', () => {
        const wrapper = mount(OfficesCreate);

        const button = wrapper.find('button.offices-create__button');
        expect(button.exists()).toBe(true);
    })

    it('should have the form', () => {
        const wrapper = mount(OfficesCreate);

        const form = wrapper.find('Form.offices-create__form');
        expect(form.exists()).toBe(true);
    })

    it('should have label in the form', () => {
        const wrapper = mount(OfficesCreate);

        const label = wrapper.find('label.offices-create__label');
        expect(label.exists()).toBe(true);
    })

    it('should have input in the form', () => {
        const wrapper = mount(OfficesCreate);

        const input = wrapper.find('input.offices-create__input');
        expect(input.exists()).toBe(true);
    })
})
