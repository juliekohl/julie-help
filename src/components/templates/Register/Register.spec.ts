import {mount} from "@vue/test-utils";
import Register from "@/components/templates/Register/Register.vue";
import {mountOptionsGlobalWithMocks as options} from "../../../../tests/helpers";

describe('Register', () => {
    it('redirects to login if register is successful', async () => {
        const wrapper = mount(Register, options);

        const inputName = wrapper.find('[name="name"]');
        await inputName.setValue('Name');

        const inputEmail = wrapper.find('[name="email"]');
        await inputEmail.setValue('test20000@test.com');

        const inputPassword = wrapper.find('[name="password"]');
        await inputPassword.setValue('secret');

        const button = wrapper.find('[type="submit"]');
        await button.trigger('click');

        expect(wrapper.vm.$router.push).toHaveBeenCalled();
    });
})
