import {flushPromises, mount} from "@vue/test-utils";
import PlansShow from "@/pages/Plans/PlansShow.vue";
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

describe('PlansShow', () => {
    it('converts GET request into an object', async () => {
        const data = {
            id: 20,
            name: 'This Name',
            value: 100,
        };

        mockedAxios.get.mockResolvedValue({
            data
        });

        const wrapper = mount(PlansShow, {global});

        await flushPromises();

        expect(wrapper.vm.plan).toMatchObject(data);
        expect(wrapper.vm.planCoworkers).toMatchObject(data);
    })
})
