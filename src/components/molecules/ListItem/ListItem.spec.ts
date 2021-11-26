import {mount} from "@vue/test-utils";
import ListItem from "@/components/molecules/ListItem/ListItem.vue";

describe('ListItem', () => {
    it('is an HTML tag li ', () => {
        const wrapper = mount(ListItem, {
            props: {
                item: {
                    name: 'name',
                    email: 'name@name.com'
                },
                to: {
                    name: 'coworkerUpdate'
                }
            },
            global: {
                stubs: ['router-link'],
            }
        });
        const li = wrapper.find('li.list-item');

        expect(li.exists()).toBe(true);
    });

    it('is an HTML tag li missing item name ', () => {
        const wrapper = mount(ListItem, {
            props: {
                item: {
                    email: 'name@name.com'
                },
                to: {
                    name: 'coworkerUpdate'
                }
            },
            global: {
                stubs: ['router-link'],
            }
        });
        const liName = wrapper.find('li.list-item');

        expect(liName.exists()).toBe(true);
    });

    it('is an HTML tag li missing item email', () => {
        const wrapper = mount(ListItem, {
            props: {
                item: {
                    name: 'name',
                },
                to: {
                    name: 'coworkerUpdate'
                }
            },
            global: {
                stubs: ['router-link'],
            }
        });
        const liEmail = wrapper.find('li.list-item');

        expect(liEmail.exists()).toBe(true);
    });

    it('is an HTML tag li missing item name and email', () => {
        const wrapper = mount(ListItem, {
            props: {
                item: {},
                to: {
                    name: 'coworkerUpdate'
                }
            },
            global: {
                stubs: ['router-link'],
            }
        });
        const liItem = wrapper.find('li.list-item');

        expect(liItem.exists()).toBe(true);
    });

    it('is an HTML tag li missing to name as well', () => {
        const wrapper = mount(ListItem, {
            props: {
                item: {},
                to: {}
            },
            global: {
                stubs: ['router-link'],
            }
        });
        const liTo = wrapper.find('li.list-item');

        expect(liTo.exists()).toBe(true);
    });

    it('is an HTML tag li without to props', () => {
        const wrapper = mount(ListItem, {
            props: {
                item: {},
            },
            global: {
                stubs: ['router-link'],
            }
        });
        const to = wrapper.find('li.list-item');

        expect(to.exists()).toBe(true);
    });

    it('is an HTML tag span subitem', () => {
        const wrapper = mount(ListItem, {
            props: {
                item: {},
                to: {}
            },
            global: {
                stubs: ['router-link'],
            }
        });
        const subitem = wrapper.find('span.list-item__subitem');

        expect(subitem.exists()).toBe(true);
    });
})
