import {mount} from "@vue/test-utils";
import TeamsRetrieveAll from "@/components/templates/Teams/TeamsRetrieveAll.vue";

describe('Teams', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsRetrieveAll);
        const teams = wrapper.find('div.teams-retrieve-all');

        expect(teams.exists()).toBe(true);
    })

    it('should have an H1 containing Teams', () => {
        const wrapper = mount(TeamsRetrieveAll);
        const h1 = wrapper.find('h1.teams-retrieve-all__header-heading');

        expect(h1.text()).toContain('Teams');
    })

    it('should have a button', () => {
        const wrapper = mount(TeamsRetrieveAll);
        const button = wrapper.find('button.teams-retrieve-all__header-button');

        expect(button.exists()).toBe(true);
    })
})
