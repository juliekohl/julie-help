import {mount} from "@vue/test-utils";
import CoworkersUpdate from "@/components/templates/CoworkersOld/CoworkersUpdate.vue";

describe('CoworkersOld Update', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersUpdate);
        // console.log(wrapper.html());

        const coworkersUpdate = wrapper.find('div.coworkers-update');
        expect(coworkersUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(CoworkersUpdate);

        const h1 = wrapper.find('h1.coworkers-update__header--heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(CoworkersUpdate);

        const button = wrapper.find('button.coworkers-update__header--button');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(CoworkersUpdate);

        const form = wrapper.find('form.coworkers-update__form');
        expect(form.exists()).toBe(true);
    })

    it('should have a label', () => {
        const wrapper = mount(CoworkersUpdate);

        const label = wrapper.find('label.coworkers-update__form--label');
        expect(label.exists()).toBe(true);
    })

    it('should have an input', () => {
        const wrapper = mount(CoworkersUpdate);

        const input = wrapper.find('input.coworkers-update__form--input');
        expect(input.exists()).toBe(true);
    })
})
