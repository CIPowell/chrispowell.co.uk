import React from 'react';
import {shallow} from 'enzyme';

import SectionHeader from './SectionHeader';

describe('Secion Header', () => {
    it('Should render a section header with the correct text', () => {
        const content = {
            text: 'A header'
        };

        const element = shallow(<SectionHeader content={content} />);
        
        expect(element.find('h2')).toHaveLength(1);
        expect(element.find('h2').text()).toBe('A header');
    });
});