import {mount} from "@vue/test-utils";
import CoworkingsUpdate from "@/pages/Coworkings/CoworkingsUpdate.vue";

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

describe('Coworkings Update', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkingsUpdate);

        const coworkingsUpdate = wrapper.find('div.coworkings-update');
        expect(coworkingsUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(CoworkingsUpdate);

        const h1 = wrapper.find('h1.coworkings-update__heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(CoworkingsUpdate);

        const button = wrapper.find('button.coworkings-update__button-edit');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(CoworkingsUpdate);

        const form = wrapper.find('form.coworkings-update__form');
        expect(form.exists()).toBe(true);
    })
})
