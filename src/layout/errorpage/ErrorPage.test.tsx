import { render } from '@testing-library/react';
import React from 'react';

import ErrorPage from './ErrorPage';

describe('Error Page component', () => {
    it.each`
    errorcode    | title
    ${404}       | ${"This isn't the content you're looking for..."}
    ${500}       | ${"Oops, that wasn't supposed to happen..."}
    `('When passed a $errorcode error the title should be $title', ({errorcode, title}) => {
        const component = render(<ErrorPage code={errorcode} />);

        expect(component.getByText(title)).toBeTruthy();
    })
});