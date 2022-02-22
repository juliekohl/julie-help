import {mount, RouterLinkStub} from "@vue/test-utils";
import OfficesShowAll from "@/pages/Offices/OfficesShowAll.vue";

const mountGlobal = {
    stubs: {
        RouterLink: RouterLinkStub
    }
};

describe('OfficesShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(OfficesShowAll, {
            global: mountGlobal
        });

        const offices = wrapper.find('div.show-all');
        expect(offices.exists()).toBe(true);
    })
})
