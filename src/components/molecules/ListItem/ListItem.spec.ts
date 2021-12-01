import {mount} from "@vue/test-utils";
import ListItem from "@/components/molecules/ListItem/ListItem.vue";

const propsDefault = {
    item: {
        id: 1,
        name: 'name',
        email: 'name@name.com'
    },
    to: {
        name: 'coworkerUpdate'
    }
}

const mountGlobal = {
    stubs: ['router-link']
};

describe('ListItem', () => {
    it('is an HTML tag li ', () => {
        const wrapper = mount(ListItem, {
            props: propsDefault,
            global: mountGlobal
        });
        const li = wrapper.find('li.list-item');

        expect(li.exists()).toBe(true);
    });

    it('is an HTML tag span subitem', () => {
        const wrapper = mount(ListItem, {
            props: propsDefault,
            global: mountGlobal
        });
        const subItem = wrapper.find('span.list-item__subitem');

        expect(subItem.exists()).toBe(true);
    });
})
