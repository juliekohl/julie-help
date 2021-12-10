import {mount} from "@vue/test-utils";
import TeamsCreate from "@/pages/Teams/TeamsCreate.vue";

describe('New Teams', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsCreate);

        const teamsCreate = wrapper.find('div.teams-create');
        expect(teamsCreate.exists()).toBe(true);
    })

    it('should have an H1 containing New Team', () => {
        const wrapper = mount(TeamsCreate);

        const h1 = wrapper.find('h1.teams-create__heading');
        expect(h1.text()).toContain('Create Team');
    })

    it('should have add new team as button', () => {
        const wrapper = mount(TeamsCreate);

        const button = wrapper.find('button.teams-create__button');
        expect(button.exists()).toBe(true);
    })

    it('should have the form', () => {
        const wrapper = mount(TeamsCreate);

        const form = wrapper.find('Form.teams-create__form');
        expect(form.exists()).toBe(true);
    })

    it('should have label in the form', () => {
        const wrapper = mount(TeamsCreate);

        const label = wrapper.find('label.teams-create__label');
        expect(label.exists()).toBe(true);
    })

    it('should have input in the form', () => {
        const wrapper = mount(TeamsCreate);

        const input = wrapper.find('input.teams-create__input');
        expect(input.exists()).toBe(true);
    })
})
