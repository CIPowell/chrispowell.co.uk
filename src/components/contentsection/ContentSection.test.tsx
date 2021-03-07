import React from 'react';

import { ContentSection, IContentSectionProps } from './ContentSection';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { BlogStore } from '../../store/blog/store';
import { Provider } from 'react-redux';

describe('A Content Section', () => {
    const initialState = new BlogStore();
    const mockStore = configureStore();

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

        const block = render(<Provider store={mockStore({blogStore: initialState})}><ContentSection {...props} /></Provider>);

        expect(block.container.children).not.toBeNull();
    });
});