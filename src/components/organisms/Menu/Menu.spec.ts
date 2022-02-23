import {mount} from "@vue/test-utils";
import Menu from "@/components/organisms/Menu/Menu.vue";
import {mountOptions as options} from "../../../../tests/helpers";

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('menu', () => {
    it('is an HTML tag nav', () => {
        const wrapper = mount(Menu, options);

        const menu = wrapper.find('nav.menu');
        expect(menu.exists()).toBe(true);
    })

    it('should have Julie.help as a h1.menu__heading', () => {
        const wrapper = mount(Menu, options);
        const menuHeading = wrapper.find('h1.menu__header-heading');

        expect(menuHeading.exists()).toBe(true);
        expect(menuHeading.text()).toContain('Julie.help!');
    })

    it('should have an ul.menu__sidebar--options', () => {
        const wrapper = mount(Menu, options);
        const menuSidebar = wrapper.find('ul.menu__sidebar-options');

        expect(menuSidebar.exists()).toBe(true);
    })

    it('should have 7 li: dashboard, coworkers, teams, offices, plans, Profile and Logout', () => {
        const wrapper = mount(Menu, options);
        const menuSidebarItems = wrapper.findAll('ul.menu__sidebar-options li');

        expect(menuSidebarItems[0].text()).toContain('Dashboard');
        expect(menuSidebarItems[1].text()).toContain('Coworkers');
        expect(menuSidebarItems[2].text()).toContain('Teams');
        expect(menuSidebarItems[3].text()).toContain('Offices');
        expect(menuSidebarItems[4].text()).toContain('Plans');
        expect(menuSidebarItems[5].text()).toContain('Profile');
        expect(menuSidebarItems[6].text()).toContain('Logout');
    })

    it('should show/hide when clicking on hamburger', async () => {
        const wrapper = mount(Menu, options);
        const burger = wrapper.find('div.menu__header-burger');

        await burger.trigger('click');

        expect(burger.classes()).toEqual(expect.arrayContaining(['menu__header-burger--active']));
    })
})
