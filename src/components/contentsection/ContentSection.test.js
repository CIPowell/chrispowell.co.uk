import React from 'react';

import ContentSection from './ContentSection';
import TextBlock from '../textblock/TextBlock';
import { shallow } from 'enzyme';
import TwoColumn from '../twocolumn/TwoColumn';

const testComponents = {
    'TextBlock' : TextBlock,
    'TwoColumn' : TwoColumn
}

describe('A Content Section', () => {
    it.each`
        blockType      | elementName
        ${'textblock'} | ${'TextBlock'}
        ${'two_column'} | ${'TwoColumn'}
    `('Block type $blocktype should return a react element of type $elementName', ({blockType, elementName}) =>{
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