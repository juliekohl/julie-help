import {mount, RouterLinkStub} from "@vue/test-utils";
import PlansShowAll from "@/pages/Plans/PlansShowAll.vue";

const mountGlobal = {
    stubs: {
        RouterLink: RouterLinkStub
    }
};

describe('PlansShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(PlansShowAll, {
            global: mountGlobal
        });

        const plans = wrapper.find('div.show-all');
        expect(plans.exists()).toBe(true);
    })
})
