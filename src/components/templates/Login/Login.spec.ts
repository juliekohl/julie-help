import {mount, RouterLinkStub} from "@vue/test-utils";
import Login from "./Login";

const options = {
    global: {
        stubs: {
            RouterLink: RouterLinkStub
        },
        mocks: {
            $store: {
                state: {
                    auth: {
                        status: {
                            loggedIn: true
                        }
                    }
                }
            },
            $router: {
                push: jest.fn(),
            }
        }
    },
};

describe('Login', () => {
    it('redirects to login given incorrect email and password', async () => {
        const wrapper = mount(Login, options);

        const inputEmail = wrapper.find('[name="email"]');
        await inputEmail.setValue('wrong-test@test.com');

        const inputPassword = wrapper.find('[name="password"]');
        await inputPassword.setValue('wrong-secret');

        const button = wrapper.find('[type="submit"]');
        await button.trigger('click');

        expect(window.location.href).toEqual('http://localhost/')
    })
})
