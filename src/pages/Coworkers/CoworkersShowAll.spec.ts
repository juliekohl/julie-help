import {mount} from "@vue/test-utils";
import CoworkersShowAll from "@/pages/Coworkers/CoworkersShowAll.vue";
import {mountOptionsWithProvide as options} from "../../../tests/helpers";

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('CoworkersShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersShowAll, options);

        const coworkers = wrapper.find('div.show-all');
        expect(coworkers.exists()).toBe(true);
    })
})
