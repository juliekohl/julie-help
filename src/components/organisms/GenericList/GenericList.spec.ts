import {mount} from "@vue/test-utils";
import GenericList from "@/components/organisms/GenericList/GenericList.vue";

describe('GenericList', () => {
    it('is an HTML tag ul', () => {
        const wrapper = mount(GenericList, {
            props: {
                item: {},
                to: {},
                all: {},
            },
            global: {
                stubs: ['router-link'],
            }
        });
        const ul = wrapper.find('ul.generic-list');

        expect(ul.exists()).toBe(true);
    });
})