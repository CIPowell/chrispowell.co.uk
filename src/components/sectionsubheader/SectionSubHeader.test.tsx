import { render } from '@testing-library/react';
import React from 'react';

import { SectionSubHeader } from './SectionSubHeader';

describe('Section Sub Header', () => {
    it('Should render a sub-header', () => {
        const content = {
            type: 'sub_header',
            text: 'Subheader 123'
        };

        const element = render(<SectionSubHeader {...content} />);

        expect(element.container.querySelectorAll('h3')).toHaveLength(1);
        expect(element.container.querySelector('h3')?.textContent).toBe('Subheader 123');
    })

});