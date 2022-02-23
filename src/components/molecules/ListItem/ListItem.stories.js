import ListItem from "./ListItem.vue";

export default {
    title: 'Example/ListItem',
    component: ListItem,
    args: {
        item: {
            id: 1,
            name: 'Name',
            email: 'email@example.com',
        },
        updateToName: 'updateToName',
        showToName: 'showToName'
    },
};

export const Default = (args) => ({
    components: { ListItem },
    setup() {
        return { args };
    },
    template: '<list-item v-bind="args" />',
});
