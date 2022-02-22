import {mount, RouterLinkStub} from "@vue/test-utils";
import ShowAll from "@/components/templates/ShowAll/ShowAll.vue";

const mountGlobal = {
    stubs: {
        RouterLink: RouterLinkStub
    }
};

describe('ShowAll', () => {
    it('shows up title and createButtonText', () => {
        const wrapper = mount(ShowAll, {
            global: mountGlobal,
            props: {
                title: 'This Title',
                createButtonText: 'Add new Button text'
            }
        });

        expect(wrapper.text()).toContain('This Title');
        expect(wrapper.text()).toContain('Button text');
    });
})
