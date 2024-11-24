import { useArgs } from '@storybook/preview-api';
import DateDisplay from './DateDisplay';

export default {
    component: DateDisplay,
};

export const Now = {
    args: {
        date: new Date()
    },
    render: function Render({date}) {
        return (<DateDisplay date={date} />);
    }
};