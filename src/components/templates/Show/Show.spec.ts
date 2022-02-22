import {mount, RouterLinkStub} from "@vue/test-utils";
import Show from "@/components/templates/Show/Show.vue";

const mountGlobal = {
    stubs: {
        RouterLink: RouterLinkStub
    }
};

describe('Show', () => {
    it('show up title and extraTitle', () => {
        const wrapper = mount(Show, {
            global: mountGlobal,
            props: {
                title: 'This Title',
                extraTitle: 'This Extra Title',
                entity: {
                    id: 1,
                }
            }
        });

        expect(wrapper.text()).toContain('This Title');
        expect(wrapper.text()).toContain('This Extra Title');
    });
})
