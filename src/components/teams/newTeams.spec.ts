import {mount} from "@vue/test-utils";
import NewTeams from "@/components/teams/NewTeams.vue";

describe('New Teams', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(NewTeams);
        const newTeams = wrapper.find('div.new-teams');

        expect(newTeams.exists()).toBe(true);
    })

    it('should have Teams as H1', () => {
        const wrapper = mount(NewTeams);
        const h1newTeams = wrapper.find('h1.new-teams__header--heading');

        expect(h1newTeams.text()).toContain('New Team');
    })

    it('should have add new coworker as button', () => {
        const wrapper = mount(NewTeams);
        const addNewTeam = wrapper.find('button.new-teams__header--btn');

        expect(addNewTeam.exists()).toBe(true);
    })

    it('should have form', () => {
        const wrapper = mount(NewTeams);
        const formNewTeam = wrapper.find('form.new-teams__form');

        expect(formNewTeam.exists()).toBe(true);
    })

    it('should have label as form', () => {
        const wrapper = mount(NewTeams);
        const labelNewTeam = wrapper.find('label.new-teams__form--label');

        expect(labelNewTeam.exists()).toBe(true);
    })

    it('should have input as form', () => {
        const wrapper = mount(NewTeams);
        const inputNewTeam = wrapper.find('input.new-teams__form--input');

        expect(inputNewTeam.exists()).toBe(true);
    })
})
