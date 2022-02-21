import ButtonUnit from "./ButtonUni.vue";

export default {
    title: 'Example/ButtonUnit',
    component: ButtonUnit,
    args: {
        label: 'Button',
    },
    argTypes: {
        to: {
            type: { name: 'string', required: false, params: {} },
        },
        color: {
            type: { name: 'string', required: true, default: 'black' },
            options: ['purple', 'black', 'gray'],
            control: 'radio'
        },
        type: {
            type: { name: 'string', required: true, default: 'button' },
            options: ['button', 'submit', 'reset'],
            control: 'radio',
        },
    },
};

export const Default = (args) => ({
    components: { ButtonUnit },
    setup() {
        return { args };
    },
    template: '<ButtonUnit v-bind="args" />',
});
