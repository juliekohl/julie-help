import {mount} from "@vue/test-utils";
import GenericList from "@/components/organisms/GenericList/GenericList.vue";

describe('GenericList', () => {
    it('is an HTML tag ul', () => {
        const wrapper = mount(GenericList, {
            props: {
                all: [
                    {
                        id: 1,
                        name: 'Test',
                        email: 'test@test.com'
                    }
                ],
            },
            global: {
                stubs: ['router-link'],
            }
        });
        const ul = wrapper.find('ul.generic-list');

        expect(ul.exists()).toBe(true);
    });
})