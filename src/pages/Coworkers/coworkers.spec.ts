import {mount} from "@vue/test-utils";
import Coworkers from "@/pages/Coworkers/Coworkers.vue";

describe('Coworkers', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(Coworkers);
        // console.log(wrapper.html());

        const coworkers = wrapper.find('div.coworkers');
        expect(coworkers.exists()).toBe(true);
    })
})
