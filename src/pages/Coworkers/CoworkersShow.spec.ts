import {flushPromises, mount} from "@vue/test-utils";
import CoworkersShow from "@/pages/Coworkers/CoworkersShow.vue";
import axios from "axios";
import {mountOptionsGlobal as global} from "../../../tests/helpers";

jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
        currentRoute: {
            value: {
                params: {
                    id: 20
                }
            }
        }
    }),
}));

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CoworkersShow', () => {
    it('converts GET request into an object', async () => {
        const data = {
            id: 20,
            name: 'This Name',
            email: 'email@example.com',
            planId: 1,
            planName: 'Plan Name',
            value: 100,
        };

        mockedAxios.get.mockResolvedValue({
            data
        });

        const wrapper = mount(CoworkersShow, { global });

        await flushPromises();

        expect(wrapper.vm.coworkerUser).toMatchObject(data);
    })
})
