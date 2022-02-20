import {mount} from "@vue/test-utils";
import ShowAll from "@/components/templates/ShowAll/ShowAll.vue";

describe('ShowAll', () => {
    it('sanity', () => {
        const wrapper = mount(ShowAll, {
            props: {
                title: 'This Title'
            }
        });

        expect(wrapper.text()).toContain('This Title');
    });

    it('shows up title and createButtonText', () => {});
})
