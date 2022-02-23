import {mount} from "@vue/test-utils";
import PlansShowAll from "@/pages/Plans/PlansShowAll.vue";
import {mountOptions as options} from "../../../tests/helpers";

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('PlansShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(PlansShowAll, options);

        const plans = wrapper.find('div.show-all');
        expect(plans.exists()).toBe(true);
    })
})
