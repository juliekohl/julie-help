import {mount} from "@vue/test-utils";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

describe('ButtonUnit', () => {
    it('is an HTML tag button', () => {
        const wrapper = mount(ButtonUnit);
        const buttonUnit = wrapper.find('button.button-unit');

        expect(buttonUnit.exists()).toBe(true);
    });

    it('is an HTML tag a', () => {
       const wrapper = mount(ButtonUnit, {
           props: {
               to: {},
               color: '',
           },
           global: {
               stubs: ['router-link'],
           }
       });
       const anchor = wrapper.find('a.button-unit');

        expect(anchor.exists()).toBe(false);
    });
})
