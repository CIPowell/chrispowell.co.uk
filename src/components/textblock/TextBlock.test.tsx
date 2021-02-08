import { render } from '@testing-library/react';
import React from 'react';
import { IContentSectionProps } from '../contentsection/ContentSection';

import { TextBlock } from './TextBlock';

describe('A Text Block', () => {
    it('Should render a section', () => {
        const content: IContentSectionProps = {
            type: 'textblock',
            text: 'Hello World!'
        };

        const block = render(<TextBlock {...content} />);

        expect(block.findByText('Hello World!')).toBeTruthy()
    });

});