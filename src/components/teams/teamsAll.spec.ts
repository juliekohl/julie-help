import {mount} from "@vue/test-utils";
import TeamsAll from "@/components/teams/TeamsAll.vue";

describe('Teams', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsAll);
        const teams = wrapper.find('div.teams');

        expect(teams.exists()).toBe(true);
    })

    it('should have Teams as H1', () => {
        const wrapper = mount(TeamsAll);
        const h1cTeams = wrapper.find('h1.teams__header-heading');

        expect(h1cTeams.text()).toContain('Teams');
    })

    it('should have add new teams as button', () => {
        const wrapper = mount(TeamsAll);
        const addNewTeams = wrapper.find('button.teams__header-btn');

        expect(addNewTeams.exists()).toBe(true);
    })
})
