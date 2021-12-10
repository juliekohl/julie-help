import {mount} from "@vue/test-utils";
import CoworkersCreate from "@/pages/Coworkers/CoworkersCreate.vue";

describe('New Coworkers', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersCreate);

        const coworkersCreate = wrapper.find('div.coworkers-create');
        expect(coworkersCreate.exists()).toBe(true);
    })

    it('should have an H1 containing New Coworker', () => {
        const wrapper = mount(CoworkersCreate);

        const h1 = wrapper.find('h1.coworkers-create__heading');
        expect(h1.text()).toContain('Create Coworker');
    })

    it('should have add new coworker as button', () => {
        const wrapper = mount(CoworkersCreate);

        const button = wrapper.find('button.coworkers-create__button');
        expect(button.exists()).toBe(true);
    })

    it('should have the form', () => {
        const wrapper = mount(CoworkersCreate);

        const form = wrapper.find('Form.coworkers-create__form');
        expect(form.exists()).toBe(true);
    })

    it('should have label in the form', () => {
        const wrapper = mount(CoworkersCreate);

        const label = wrapper.find('label.coworkers-create__label');
        expect(label.exists()).toBe(true);
    })

    it('should have input in the form', () => {
        const wrapper = mount(CoworkersCreate);

        const input = wrapper.find('input.coworkers-create__input');
        expect(input.exists()).toBe(true);
    })
})
