import {mount} from "@vue/test-utils";
import AllCoworkers from "@/components/templates/Coworkers/AllCoworkers.vue";

describe('Coworkers', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(AllCoworkers);
        // console.log(wrapper.html());

        const coworkers = wrapper.find('div.coworkers');
        expect(coworkers.exists()).toBe(true);
    })

    it('should have Coworkers as H1', () => {
        const wrapper = mount(AllCoworkers);

        const h1cCoworkers = wrapper.find('h1.coworkers__header-heading');
        expect(h1cCoworkers.text()).toContain('Coworkers');
    })

    it('should have add new coworker as button', () => {
        const wrapper = mount(AllCoworkers);

        const addNewCoworker = wrapper.find('button.coworkers__header-btn');
        expect(addNewCoworker.exists()).toBe(true);
    })
})
