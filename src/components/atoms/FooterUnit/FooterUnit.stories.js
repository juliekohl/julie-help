import FooterUnit from "./FooterUnit.vue";

export default {
  title: 'Example/FooterUnit',
  component: FooterUnit,
  args: {
    name: 'Footer',
  }

};

export const Default = (args) => ({
  components: { FooterUnit },
  setup() {
    return { args };
  },
  template: '<footer-unit v-bind="args" />',
});
