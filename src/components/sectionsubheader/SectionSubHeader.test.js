import React from 'react';
import {shallow} from 'enzyme';

import SectionSubHeader from './SectionSubHeader';

describe('Section Sub Header', () => {
    it('Should render a sub-header', () => {
        const content = {
            text: 'Subheader 123'
        };

        const element = shallow(<SectionSubHeader content={content} />);

        expect(element.find('h3')).toHaveLength(1);
        expect(element.find('h3').text()).toBe('Subheader 123');
    })

});