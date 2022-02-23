import axios from 'axios';
import {mount} from "@vue/test-utils";
import TeamsUpdate from "@/pages/Teams/TeamsUpdate.vue";
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

describe('Teams Update', () => {
    beforeEach(() => {
        mockedAxios.get.mockResolvedValue({
            data: {}
        });
    })

    it('is an HTML tag div', () => {
        const wrapper = mount(TeamsUpdate, { global });

        const teamsUpdate = wrapper.find('div.teams-update');
        expect(teamsUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(TeamsUpdate, { global });

        const h1 = wrapper.find('h1.teams-update__heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(TeamsUpdate, { global });

        const button = wrapper.find('button.teams-update__button-edit');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(TeamsUpdate, { global });

        const form = wrapper.find('form.teams-update__form');
        expect(form.exists()).toBe(true);
    })
})
