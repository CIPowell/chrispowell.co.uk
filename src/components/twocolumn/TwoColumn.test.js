import React from 'react';

import { shallow } from 'enzyme';
import TwoColumn from './TwoColumn';

describe('A Two Column Block', () => {
    it('Should render a two column section', () => {
        const content = {
            type: 'textblock',
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

});