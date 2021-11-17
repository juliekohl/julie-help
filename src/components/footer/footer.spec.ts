import {mount} from "@vue/test-utils";
import Footer from "@/components/footer/Footer.vue";

describe('Footer', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(Footer);
        const footer = wrapper.find('div.footer');

        expect(footer.exists()).toBe(true);
    })

    it('should have Footer as span', () => {
        const wrapper = mount(Footer);
        const spanFooterOne = wrapper.find('span.footer__text--one');
        const spanFooterTwo = wrapper.find('span.footer__text--two');

        expect(spanFooterOne.exists()).toBe(true);
        expect(spanFooterTwo.exists()).toBe(true);
    })
    it('should have Footer as img', () => {
        const wrapper = mount(Footer);
        const imgFooter = wrapper.find('img.footer__text--two-img');

        expect(imgFooter.exists()).toBe(true);
    })
})
