import {mount, RouterLinkStub} from "@vue/test-utils";
import CoworkersShowAll from "@/pages/Coworkers/CoworkersShowAll.vue";

const mountGlobal = {
    stubs: {
        RouterLink: RouterLinkStub
    }
};

describe('CoworkersShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersShowAll, {
            global: mountGlobal
        });

        const coworkers = wrapper.find('div.show-all');
        expect(coworkers.exists()).toBe(true);
    })
})
