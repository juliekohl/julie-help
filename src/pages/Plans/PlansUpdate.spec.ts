import axios from 'axios';
import {mount} from "@vue/test-utils";
import PlansUpdate from "@/pages/Plans/PlansUpdate.vue";
import {mountOptionsGlobal as global} from "../../../tests/helpers";

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

describe('Plans Update', () => {
    beforeEach(() => {
        mockedAxios.get.mockResolvedValue({
            data: {}
        });
    })

    it('is an HTML tag div', () => {
        const wrapper = mount(PlansUpdate, { global });

        const plansUpdate = wrapper.find('div.plans-update');
        expect(plansUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(PlansUpdate, { global });

        const h1 = wrapper.find('h1.plans-update__heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(PlansUpdate, { global });

        const button = wrapper.find('button.plans-update__button-edit');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(PlansUpdate, { global });

        const form = wrapper.find('form.plans-update__form');
        expect(form.exists()).toBe(true);
    })
})
