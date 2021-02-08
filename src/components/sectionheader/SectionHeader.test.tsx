import { render } from '@testing-library/react';
import React from 'react';

import { SectionHeader } from './SectionHeader';

describe('Section Header', () => {
    it('Should render a section header with the correct text', () => {
        const content = {
            text: 'A header'
        };

        const element = render(<SectionHeader type="section_header" text={content.text} />);
        
        expect(element.container.querySelectorAll('h2')).toHaveLength(1);
        expect(element.queryByText('A header')).toBeTruthy();
    });
});