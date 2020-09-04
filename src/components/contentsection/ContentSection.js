import React from 'react';
import TextBlock from '../textblock/TextBlock';
import TwoColumn from '../twocolumn/TwoColumn';
import SectionHeader from '../sectionheader/SectionHeader';
import SectionSubHeader from '../sectionsubheader/SectionSubHeader';
import BlogRibbon from '../blog/ribbon/BlogRibbon';

const Blocks = {
    'two_column': TwoColumn,
    'text_block' : TextBlock,
    'section_header': SectionHeader,
    'section_subheader' : SectionSubHeader,
    'blog_ribbon': BlogRibbon
}

const ContentSection = (props) => {
    const BlockType = Blocks[props.content.type];
    return <BlockType content={props.content} className={props.className}/>
}


export default ContentSection;