import {mount} from "@vue/test-utils";
import Footer from "@/components/atoms/FooterUnit/FooterUnit.vue";

describe('Footer', () => {
    it('is an HTML tag div', () => {
        const wrapper = mount(Footer);
        const footerUnit = wrapper.find('div.FooterUnit');

        expect(footerUnit.exists()).toBe(true);
    })

    it('should have FooterUnit as span', () => {
        const wrapper = mount(Footer);
        const spanFooterOne = wrapper.find('span.footer-unit__text--one');
        const spanFooterTwo = wrapper.find('span.footer-unit__text--two');

        expect(spanFooterOne.exists()).toBe(true);
        expect(spanFooterTwo.exists()).toBe(true);
    })
    it('should have FooterUnit as img', () => {
        const wrapper = mount(Footer);
        const imgFooter = wrapper.find('img.footer-unit__text--two-img');

        expect(imgFooter.exists()).toBe(true);
    })
})
