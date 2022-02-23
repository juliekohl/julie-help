import {mount} from "@vue/test-utils";
import PlansCreate from "@/pages/Plans/PlansCreate.vue";
import {mountOptionsWithProvide as options} from "../../../tests/helpers";

describe('New Plans', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(PlansCreate, options);

        const plansCreate = wrapper.find('div.plans-create');
        expect(plansCreate.exists()).toBe(true);
    })

    it('should have an H1 containing New Coworker', () => {
        const wrapper = mount(PlansCreate, options);

        const h1 = wrapper.find('h1.plans-create__heading');
        expect(h1.text()).toContain('Create Plan');
    })

    it('should have add new coworker as button', () => {
        const wrapper = mount(PlansCreate, options);

        const button = wrapper.find('button.plans-create__button');
        expect(button.exists()).toBe(true);
    })

    it('should have the form', () => {
        const wrapper = mount(PlansCreate, options);

        const form = wrapper.find('Form.plans-create__form');
        expect(form.exists()).toBe(true);
    })

    it('should have label in the form', () => {
        const wrapper = mount(PlansCreate, options);

        const label = wrapper.find('label.plans-create__label');
        expect(label.exists()).toBe(true);
    })

    it('should have input in the form', () => {
        const wrapper = mount(PlansCreate, options);

        const input = wrapper.find('input.plans-create__input');
        expect(input.exists()).toBe(true);
    })
})
