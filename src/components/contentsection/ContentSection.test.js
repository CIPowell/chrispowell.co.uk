import React from 'react';

import ContentSection from './ContentSection';
import TextBlock from '../textblock/TextBlock';
import { shallow } from 'enzyme';
import TwoColumn from '../twocolumn/TwoColumn';
import SectionHeader from '../sectionheader/SectionHeader';

const testComponents = {
    'TextBlock' : TextBlock,
    'TwoColumn' : TwoColumn,
    'SectionHeader': SectionHeader
}

describe('A Content Section', () => {
    it.each`
        blockType      | elementName
        ${'text_block'} | ${'TextBlock'}
        ${'two_column'} | ${'TwoColumn'}
        ${'section_header'} | ${'SectionHeader'}
    `('Block type $blockType should return a react element of type $elementName', ({blockType, elementName}) =>{
        const content = {
            type: blockType,
            text: '',
            image: {}
        };

        const block = shallow(<ContentSection content={content} />);
        const ChildComponent = testComponents[elementName];
        const childComponent = <ChildComponent content={content} />;

        expect(block.containsMatchingElement(childComponent)).toBe(true);
    });

});