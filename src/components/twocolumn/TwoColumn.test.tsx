import { render } from '@testing-library/react';
import React from 'react';

import TwoColumn from './TwoColumn';

describe('A Two Column Block', () => {
    it('Should render a two column section', () => {
        const content = {
            type: 'two_column',
            image: {
                src: 'https://via.placeholder.com/150x200.png/',
                alt: 'placeholder'
            },
            text: 'Hello World!'
        };

        const block = render(<TwoColumn {...content} />);

        expect(block.container.querySelectorAll('section').length).toBe(1);
        expect(block.findAllByText('Hello World!')).toBeTruthy();
        expect(block.findAllByAltText('placeholder')).toBeTruthy()
    });
    
    it('should not include a image if there is no image', () => {
        const content = {
            type: 'two_column',
            text: 'Hello World!'
        };
        
        const block = render(<TwoColumn {...content} />);
        expect(block.findByText('Hello World!')).toBeTruthy();
    });

});