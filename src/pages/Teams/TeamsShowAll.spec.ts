import {mount} from "@vue/test-utils";
import TeamsShowAll from "@/pages/Teams/TeamsShowAll.vue";
import {mountOptions as options} from "../../../tests/helpers";

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('TeamsShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsShowAll, options);

        const teams = wrapper.find('div.show-all');
        expect(teams.exists()).toBe(true);
    })
})
