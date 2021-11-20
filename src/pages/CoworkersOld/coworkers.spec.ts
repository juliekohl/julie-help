import {mount} from "@vue/test-utils";
import Coworkers from "@/pages/CoworkersOld/Coworkers.vue";

describe('Coworkers', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(Coworkers);
        // console.log(wrapper.html());

        const coworkers = wrapper.find('div.coworkers');
        expect(coworkers.exists()).toBe(true);
    })
    it('should have CoworkersOld as H1', () => {
        const wrapper = mount(Coworkers);

        const h1cCoworkers = wrapper.find('h1');
        expect(h1cCoworkers.text()).toContain('Coworkers');
    })
    it('should have add new coworker as button', () => {
        const wrapper = mount(Coworkers);

        const addNewCoworker = wrapper.find('button.form__btn');
        expect(addNewCoworker.exists()).toBe(true);
    })
})
