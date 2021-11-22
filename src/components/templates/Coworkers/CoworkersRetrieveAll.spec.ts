import {mount} from "@vue/test-utils";
import CoworkersRetrieveAll from "@/components/templates/Coworkers/CoworkersRetrieveAll.vue";

describe('CoworkersRetrieveAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersRetrieveAll);

        const coworkers = wrapper.find('div.coworkers-retrieve-all');
        expect(coworkers.exists()).toBe(true);
    })

    it('should have H1 containing Coworkers', () => {
        const wrapper = mount(CoworkersRetrieveAll);

        const h1 = wrapper.find('h1.coworkers-retrieve-all__header-heading');
        expect(h1.text()).toContain('Coworkers');
    })

    it('should have a button', () => {
        const wrapper = mount(CoworkersRetrieveAll);

        const button = wrapper.find('button.coworkers-retrieve-all__header-button');
        expect(button.exists()).toBe(true);
    })
})
