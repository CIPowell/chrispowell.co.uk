import React from 'react';

import TextBlock from './TextBlock';
import { shallow } from 'enzyme';

describe('A Text Block', () => {
    it('Should render a section', () => {
        const content = {
            type: 'textblock',
            text: 'Hello World!'
        };

        const block = shallow(<TextBlock content={content} />);

        expect(block.containsMatchingElement(<p>Hello World!</p>)).toBe(true);
    });

});