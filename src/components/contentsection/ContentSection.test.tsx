import React from 'react';

import { ContentSection, IContentSectionProps } from './ContentSection';
import { render } from '@testing-library/react';

describe('A Content Section', () => {
    it.each`
        blockType      | elementName
        ${'text_block'} | ${'TextBlock'}
        ${'two_column'} | ${'TwoColumn'}
        ${'section_header'} | ${'SectionHeader'}
        ${'section_subheader'} | ${'SectionSubHeader'}
        ${'blog_ribbon'} | ${'BlogRibbon'}
    `('Block type $blockType should return a react element of type $elementName', ({blockType}) =>{
        const props: IContentSectionProps = {
            type: blockType,
            className: ""
        };

        const block = render(<ContentSection {...props} />);

        expect(block.container.children).not.toBeNull();
    });
});