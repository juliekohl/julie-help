import {mount} from "@vue/test-utils";
import NewCoworkers from "@/components/templates/Coworkers/NewCoworkers.vue";

describe('New Coworkers', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(NewCoworkers);
        // console.log(wrapper.html());

        const newCoworkers = wrapper.find('div.new-coworkers');
        expect(newCoworkers.exists()).toBe(true);
    })

    it('should have Coworkers as H1', () => {
        const wrapper = mount(NewCoworkers);

        const h1newCoworkers = wrapper.find('h1.new-coworkers__header--heading');
        expect(h1newCoworkers.text()).toContain('New Coworker');
    })

    it('should have add new coworker as button', () => {
        const wrapper = mount(NewCoworkers);

        const addNewCoworker = wrapper.find('button.new-coworkers__header--btn');
        expect(addNewCoworker.exists()).toBe(true);
    })

    it('should have form', () => {
        const wrapper = mount(NewCoworkers);

        const formNewCoworker = wrapper.find('form.new-coworkers__form');
        expect(formNewCoworker.exists()).toBe(true);
    })

    it('should have label as form', () => {
        const wrapper = mount(NewCoworkers);

        const cwkIdNewCoworker = wrapper.find('label.new-coworkers__form--label');
        expect(cwkIdNewCoworker.exists()).toBe(true);
    })

    it('should have input as form', () => {
        const wrapper = mount(NewCoworkers);

        const nameNewCoworker = wrapper.find('input.new-coworkers__form--input');
        expect(nameNewCoworker.exists()).toBe(true);
    })
})
