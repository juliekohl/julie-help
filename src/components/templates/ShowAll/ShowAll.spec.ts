import {mount} from "@vue/test-utils";
import ShowAll from "@/components/templates/ShowAll/ShowAll.vue";
import {mountOptionsGlobal as global} from "../../../../tests/helpers";

describe('ShowAll', () => {
    it('shows up title and createButtonText', () => {
        const wrapper = mount(ShowAll, {
            global,
            props: {
                title: 'This Title',
                createButtonText: 'Add new Button text'
            }
        });

        expect(wrapper.text()).toContain('This Title');
        expect(wrapper.text()).toContain('Button text');
    });
})
