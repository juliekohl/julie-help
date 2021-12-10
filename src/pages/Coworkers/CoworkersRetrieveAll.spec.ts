import {mount} from "@vue/test-utils";
import CoworkersRetrieveAll from "@/pages/Coworkers/CoworkersRetrieveAll.vue";

describe('CoworkersRetrieveAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersRetrieveAll);

        const coworkers = wrapper.find('div.retrieve-all');
        expect(coworkers.exists()).toBe(true);
    })
})
