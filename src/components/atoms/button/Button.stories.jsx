import Button from './Button.jsx';

export default {
    component: Button,
};

export const Default = {
    args: { label: "Click Me!"},
    render: ({label}) => (<Button label={label} />),
}