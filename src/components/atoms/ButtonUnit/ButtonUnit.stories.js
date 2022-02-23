import ButtonUnit from "./ButtonUnit.vue";

export default {
    title: 'Example/ButtonUnit',
    component: ButtonUnit,
    args: {
        label: 'My Button',
        color: 'purple',
        type: 'button',
    },
    argTypes: {
        color: {
            type: { type: 'string', required: true, default: 'purple' },
            options: ['purple', 'red', 'gray'],
            control: 'radio'
        },
        type: {
            type: { type: 'string', required: true, default: 'button' },
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
    template: '<button-unit v-bind="args">My Button</button-unit>',
});
