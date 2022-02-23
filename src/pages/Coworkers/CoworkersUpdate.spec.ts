import axios from 'axios';
import {mount, RouterLinkStub} from "@vue/test-utils";
import CoworkersUpdate from "@/pages/Coworkers/CoworkersUpdate.vue";
import {createStore} from "vuex";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('vue-router', () => {
    return {
        useRouter: jest.fn(() => ({
            currentRoute: {
                value: {
                    params: {
                        id: 1
                    }
                }
            },
        }))
    };
});

const options = {
    global: {
        provide: {
            store: createStore({
                state: {
                    auth: {
                        user: {}
                    }
                }
            })
        },
        stubs: {
            RouterLink: RouterLinkStub
        }
    }
};

describe('CoworkersOld Update', () => {
    beforeEach(() => {
        mockedAxios.get.mockResolvedValue({
            data: {}
        });
    })

    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersUpdate, options);

        const coworkersUpdate = wrapper.find('div.coworkers-update');
        expect(coworkersUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(CoworkersUpdate, options);

        const h1 = wrapper.find('h1.coworkers-update__heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(CoworkersUpdate, options);

        const button = wrapper.find('button.coworkers-update__button-edit');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(CoworkersUpdate, options);

        const form = wrapper.find('form.coworkers-update__form');
        expect(form.exists()).toBe(true);
    })
})
