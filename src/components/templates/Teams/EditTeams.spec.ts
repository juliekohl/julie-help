import {mount} from "@vue/test-utils";
import EditTeams from "@/components/templates/Teams/EditTeams.vue";

describe('Edit Teams', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(EditTeams);
        const editTeams = wrapper.find('div.edit-teams');

        expect(editTeams.exists()).toBe(true);
    })

    it('should have Teams as H1', () => {
        const wrapper = mount(EditTeams);
        const h1editTeams = wrapper.find('h1.edit-teams__header--heading');

        expect(h1editTeams.exists()).toBe(true);
    })

    it('should have edit team as button', () => {
        const wrapper = mount(EditTeams);
        const editTeam = wrapper.find('button.edit-teams__header--btn');

        expect(editTeam.exists()).toBe(true);
    })

    it('should have form', () => {
        const wrapper = mount(EditTeams);
        const formEditTeam = wrapper.find('form.edit-teams__form');

        expect(formEditTeam.exists()).toBe(true);
    })

    it('should have label as form', () => {
        const wrapper = mount(EditTeams);
        const labelEditTeam = wrapper.find('label.edit-teams__form--label');

        expect(labelEditTeam.exists()).toBe(true);
    })

    it('should have input as form', () => {
        const wrapper = mount(EditTeams);
        const inputEditTeam = wrapper.find('input.edit-teams__form--input');

        expect(inputEditTeam.exists()).toBe(true);
    })
})
