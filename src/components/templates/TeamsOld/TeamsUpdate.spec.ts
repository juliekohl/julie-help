import {mount} from "@vue/test-utils";
import TeamsUpdate from "@/components/templates/TeamsOld/TeamsUpdate.vue";

describe('Edit TeamsOld', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsUpdate);
        const teamsUpdate = wrapper.find('div.teams-update');

        expect(teamsUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(TeamsUpdate);
        const h1 = wrapper.find('h1.teams-update__header--heading');

        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(TeamsUpdate);
        const button = wrapper.find('button.teams-update__header--button');

        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(TeamsUpdate);
        const form = wrapper.find('form.teams-update__form');

        expect(form.exists()).toBe(true);
    })

    it('should have a label', () => {
        const wrapper = mount(TeamsUpdate);
        const label = wrapper.find('label.teams-update__form--label');

        expect(label.exists()).toBe(true);
    })

    it('should have an input', () => {
        const wrapper = mount(TeamsUpdate);
        const input = wrapper.find('input.teams-update__form--input');

        expect(input.exists()).toBe(true);
    })
})
