import React from 'react';

import { shallow } from 'enzyme';
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

        const block = shallow(<TwoColumn content={content} />);

        expect(block.find('section').length).toBe(1);
        expect(block.containsMatchingElement(<p>Hello World!</p>)).toBe(true);
        expect(block.containsMatchingElement(<img src="https://via.placeholder.com/150x200.png/" alt="placeholder" />)).toBe(true);
    });

    it('should not include a image if ther it no image', () => {
        const content = {
            type: 'two_column',
            text: 'Hello World!'
        };
        
        const block = shallow(<TwoColumn content={content} />);
        expect(block.find('img').length).toBe(0);
        expect(block.find('section').length).toBe(1);
        expect(block.containsMatchingElement(<p>Hello World!</p>)).toBe(true);
    });

});