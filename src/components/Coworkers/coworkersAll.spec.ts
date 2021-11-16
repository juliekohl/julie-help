import {mount} from "@vue/test-utils";
import CoworkersAll from "@/components/Coworkers/CoworkersAll.vue";

describe('Coworkers', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersAll);
        // console.log(wrapper.html());

        const coworkers = wrapper.find('div.coworkers');
        expect(coworkers.exists()).toBe(true);
    })

    it('should have Coworkers as H1', () => {
        const wrapper = mount(CoworkersAll);

        const h1cCoworkers = wrapper.find('h1.coworkers__heading');
        expect(h1cCoworkers.text()).toContain('Coworkers');
    })

    it('should have add new coworker as button', () => {
        const wrapper = mount(CoworkersAll);

        const addNewCoworker = wrapper.find('button.coworkers__btn');
        expect(addNewCoworker.exists()).toBe(true);
    })
})