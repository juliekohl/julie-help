import {mount} from "@vue/test-utils";
import MenuItem from "@/components/molecules/MenuItem/MenuItem.vue";

describe('MenuItem', () => {
    it('is an HTML tag li', () => {
        const wrapper = mount(MenuItem, {
            props: {
                to: {}
            },
            global: {
                stubs: ['router-link'],
            },
        });
        const li = wrapper.find('li.menu-item');

        expect(li.exists()).toBe(true);
    });

    it('is an HTML tag img', () => {
        const wrapper = mount(MenuItem, {
            props: {
                to: {},
                icon: 'icon',
                alt: 'alt',
                src: 'require(`@/assets/img/icons/${icon}.svg`)',
            },
            global: {
                stubs: ['router-link'],
            },
        });
        const image = wrapper.find('img.menu-item__button-image');

        expect(image.exists()).toBe(false);
    });

    it('is an HTML tag span', () => {
        const wrapper = mount(MenuItem, {
            props: {
                to: {},
            },
            global: {
                stubs: ['router-link'],
            },
        });
        const span  = wrapper.find('span.menu-item__button-span');

        expect(span.exists()).toBe(false);
    });
})
