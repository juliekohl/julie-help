import {mount} from "@vue/test-utils";
import Register from "@/components/templates/Register/Register.vue";

describe('Register', () => {
    it('sanity', () => {
        const wrapper = mount(Register);
    });

    it('redirects to login if register is successful', () => {});

    it('shows up an error message if register is not successful', () => {});
})
