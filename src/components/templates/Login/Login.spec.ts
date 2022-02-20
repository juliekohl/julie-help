import {mount} from "@vue/test-utils";
import Login from "@/components/templates/Login/Login.vue";

describe('Login', () => {
    it('sanity', () => {
        const wrapper = mount(Login);
    });

    it('redirects to dashboard given correct email and password', () => {})

    it('redirects to login given incorrect email and password', () => {})
})
