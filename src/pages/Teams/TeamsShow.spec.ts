import {flushPromises, mount, RouterLinkStub} from "@vue/test-utils";
import TeamsShow from "@/pages/Teams/TeamsShow.vue";
import axios from "axios";

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

const options = {
    global: {
        stubs: {
            RouterLink: RouterLinkStub
        }
    }
};

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

        const wrapper = mount(TeamsShow, options);

        await flushPromises();

        expect(wrapper.vm.teamUser).toMatchObject(data);
    })
})
