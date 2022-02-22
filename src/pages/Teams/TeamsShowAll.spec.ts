import {mount, RouterLinkStub} from "@vue/test-utils";
import TeamsShowAll from "@/pages/Teams/TeamsShowAll.vue";

const mountGlobal = {
    stubs: {
        RouterLink: RouterLinkStub
    }
};

describe('TeamsShowAll', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsShowAll, {
            global: mountGlobal
        });

        const teams = wrapper.find('div.show-all');
        expect(teams.exists()).toBe(true);
    })
})
