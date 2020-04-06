import React from 'react';
import TextBlock from '../textblock/TextBlock';
import TwoColumn from '../twocolumn/TwoColumn';
import SectionHeader from '../sectionheader/SectionHeader';
import SectionSubHeader from '../sectionsubheader/SectionSubHeader';

const Blocks = {
    'two_column': TwoColumn,
    'text_block' : TextBlock,
    'section_header': SectionHeader,
    'section_subheader' : SectionSubHeader
}

const ContentSection = (props) => {
    const BlockType = Blocks[props.content.type];
    return <BlockType content={props.content} className={props.className}/>
}


export default ContentSection;