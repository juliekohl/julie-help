import ListItem from "./ListItem.vue";

export default {
  title: 'Example/ListItem',
  component: ListItem,
  args: {
    label: 'List',
  },
  argTypes: {
    item: {
      type: {
        type: 'object',
        required: true,
        default: null,
        id: 'number',
        name: 'string',
        email: 'string'
      },
      id: {
        options: [ '1', '2', '3' ],
      },
      name: 'Julie',
      email: 'julie@example.com',
    },
    updateToName: { type: 'string' },
    showToName: { type: 'string' },
  },
};

export const ManyItems = (args) => ({
  component: { ListItem },
  setup() {
    return { args };
  },
  template: `
    <ul>
      <list-item v-bind="args" id="1"></list-item>
    </ul>
    `,
});