import {flushPromises, mount} from "@vue/test-utils";
import TeamsShow from "@/pages/Teams/TeamsShow.vue";
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

describe('TeamsShow', () => {
    it('converts GET request into an object', async () => {
        const data = {
            id: 20,
            name: 'This Name',
            email: 'email@example.com',
        };

        mockedAxios.get.mockResolvedValue({
            data
        });

        const wrapper = mount(TeamsShow, {global});

        await flushPromises();

        expect(wrapper.vm.teamUser).toMatchObject(data);
    })
})
