import {mount} from "@vue/test-utils";
import TeamsCreate from "@/components/templates/TeamsOld/TeamsCreate.vue";

describe('TeamsOld Create', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsCreate);
        const teamsCreate = wrapper.find('div.teams-create');

        expect(teamsCreate.exists()).toBe(true);
    })

    it('should have an H1 containing New Team', () => {
        const wrapper = mount(TeamsCreate);
        const h1 = wrapper.find('h1.teams-create__header--heading');

        expect(h1.text()).toContain('New Team');
    })

    it('should have a button', () => {
        const wrapper = mount(TeamsCreate);
        const button = wrapper.find('button.teams-create__header--button');

        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(TeamsCreate);
        const form = wrapper.find('form.teams-create__form');

        expect(form.exists()).toBe(true);
    })

    it('should have a label', () => {
        const wrapper = mount(TeamsCreate);
        const label = wrapper.find('label.teams-create__form--label');

        expect(label.exists()).toBe(true);
    })

    it('should have an input', () => {
        const wrapper = mount(TeamsCreate);
        const input = wrapper.find('input.teams-create__form--input');

        expect(input.exists()).toBe(true);
    })
})
