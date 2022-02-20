import {mount} from "@vue/test-utils";
import Dashboard from "@/components/templates/Dashboard/Dashboard.vue";

describe('Dashboard', () => {
    it('sanity', () => {
        const wrapper = mount(Dashboard);
    });
})
