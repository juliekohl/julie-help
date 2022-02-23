import {mount} from "@vue/test-utils";
import OfficesShowAll from "@/pages/Offices/OfficesShowAll.vue";
import {mountOptions as options} from "../../../tests/helpers";

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('OfficesShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(OfficesShowAll, options);

        const offices = wrapper.find('div.show-all');
        expect(offices.exists()).toBe(true);
    })
})
