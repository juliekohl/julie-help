import {flushPromises, mount, RouterLinkStub} from "@vue/test-utils";
import OfficesShow from "@/pages/Offices/OfficesShow.vue";
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

describe('OfficesShow', () => {
    it('converts GET request into an object', async () => {
        const data = {
            id: 20,
            name: 'This Name',
            type: 'Type',
        };

        mockedAxios.get.mockResolvedValue({
            data
        });

        const wrapper = mount(OfficesShow, options);

        await flushPromises();

        expect(wrapper.vm.office).toMatchObject(data);
    })
})
