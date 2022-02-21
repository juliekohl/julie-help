import FooterUnit from "./FooterUnit.vue";
import "../../../assets/scss/index.scss";

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
  template: '<ButtonUnit v-bind="args" />',
});
