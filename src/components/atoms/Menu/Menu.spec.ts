import {mount} from "@vue/test-utils";
import Menu from "@/components/atoms/Menu/Menu.vue";

describe('menu', () => {
    it('is an HTML tag nav', () => {
        const wrapper = mount(Menu);
        // console.log(wrapper.html())

        const menu = wrapper.find('nav.Menu');
        expect(menu.exists()).toBe(true);
    })

    it('should have Julie.help as a h1.menu__heading', () => {
        const wrapper = mount(Menu);
        const menuHeading = wrapper.find('h1.menu__header--heading');

        expect(menuHeading.exists()).toBe(true);
        expect(menuHeading.text()).toContain('Julie.help!');
    })

    it('should have an ul.menu__sidebar--options', () => {
        const wrapper = mount(Menu);
        const menuSidebar = wrapper.find('ul.menu__sidebar--options');

        expect(menuSidebar.exists()).toBe(true);
    })

    it('should have 3 li: coworkers, TeamsOld, and coworking', () => {
        const wrapper = mount(Menu);
        const menuSidebarItems = wrapper.findAll('ul.menu__sidebar--options li');

        expect(menuSidebarItems[0].text()).toContain('CoworkersOld');
        expect(menuSidebarItems[1].text()).toContain('TeamsOld');
        expect(menuSidebarItems[2].text()).toContain('Coworking');
    })

    it('should show/hide when clicking on hamburger', async () => {
        const wrapper = mount(Menu);
        const burger = wrapper.find('div.menu__header--burger');

        await burger.trigger('click');

        expect(burger.classes()).toEqual(expect.arrayContaining(['menu__header--burger-active']));
    })
})
