import {mount} from "@vue/test-utils";
import CoworkersUpdate from "@/pages/Coworkers/CoworkersUpdate.vue";

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

describe('CoworkersOld Update', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(CoworkersUpdate);

        const coworkersUpdate = wrapper.find('div.coworkers-update');
        expect(coworkersUpdate.exists()).toBe(true);
    })

    it('should have an H1', () => {
        const wrapper = mount(CoworkersUpdate);

        const h1 = wrapper.find('h1.coworkers-update__heading');
        expect(h1.exists()).toBe(true);
    })

    it('should have a button', () => {
        const wrapper = mount(CoworkersUpdate);

        const button = wrapper.find('button.coworkers-update__button-edit');
        expect(button.exists()).toBe(true);
    })

    it('should have a form', () => {
        const wrapper = mount(CoworkersUpdate);

        const form = wrapper.find('form.coworkers-update__form');
        expect(form.exists()).toBe(true);
    })
})
