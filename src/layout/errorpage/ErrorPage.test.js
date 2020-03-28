import React from 'react';

import ErrorPage from './ErrorPage';
import { shallow } from 'enzyme';

describe('Error Page component', () => {
    it.each`
    errorcode    | title
    ${404}       | ${"This isn't the content you're looking for..."}
    ${500}       | ${"Oops, that wasn't supposed to happen..."}
    `
    ('When passed a $errorcode error the title should be $title', ({errorcode, title}) => {
        const component = shallow(<ErrorPage code={errorcode} />);

        const headers = component.find('h2');
        expect(headers.length).toBe(1);
        expect(headers.text()).toBe(title);
    })
});