import {mount} from "@vue/test-utils";
import EditCoworkers from "@/components/templates/Coworkers/EditCoworkers.vue";

describe('Edit CoworkersOld', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(EditCoworkers);
        // console.log(wrapper.html());

        const editCoworkers = wrapper.find('div.edit-coworkers');
        expect(editCoworkers.exists()).toBe(true);
    })

    it('should have CoworkersOld as H1', () => {
        const wrapper = mount(EditCoworkers);

        const h1editCoworkers = wrapper.find('h1.edit-coworkers__header--heading');
        expect(h1editCoworkers.exists()).toBe(true);
    })

    it('should have edit coworker as button', () => {
        const wrapper = mount(EditCoworkers);

        const editCoworker = wrapper.find('button.edit-coworkers__header--btn');
        expect(editCoworker.exists()).toBe(true);
    })

    it('should have form', () => {
        const wrapper = mount(EditCoworkers);

        const formEditCoworker = wrapper.find('form.edit-coworkers__form');
        expect(formEditCoworker.exists()).toBe(true);
    })

    it('should have label as form', () => {
        const wrapper = mount(EditCoworkers);

        const cwkIdEditCoworker = wrapper.find('label.edit-coworkers__form--label');
        expect(cwkIdEditCoworker.exists()).toBe(true);
    })

    it('should have input as form', () => {
        const wrapper = mount(EditCoworkers);

        const nameEditCoworker = wrapper.find('input.edit-coworkers__form--input');
        expect(nameEditCoworker.exists()).toBe(true);
    })
})
