import {mount, RouterLinkStub} from "@vue/test-utils";
import ButtonUnit from "@/components/atoms/ButtonUnit/ButtonUnit.vue";

const mountGlobal = {
    stubs: {
        RouterLink: RouterLinkStub
    }
};

describe('ButtonUnit', () => {
    it('is an HTML tag button given a nullable prop to', () => {
        const wrapper = mount(ButtonUnit, {
            global: mountGlobal
        });
        const buttonUnit = wrapper.find('button.button-unit');

        expect(buttonUnit.exists()).toBe(true);
    });

    it('is an HTML tag a given a non nullable prop to', () => {
       const wrapper = mount(ButtonUnit, {
           props: {
               to: {
                   name: 'Test'
               },
           },
           global: mountGlobal
       });
       const anchor = wrapper.find('a.button-unit');

       expect(anchor.exists()).toBe(true);
    });
})
