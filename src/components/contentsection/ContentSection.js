import React from 'react';
import TextBlock from '../textblock/TextBlock';
import TwoColumn from '../twocolumn/TwoColumn';
import SectionHeader from '../sectionheader/SectionHeader';

const Blocks = {
    'two_column': TwoColumn,
    'text_block' : TextBlock,
    'section_header': SectionHeader
}

const ContentSection = (props) => {
    const BlockType = Blocks[props.content.type];
    return <BlockType content={props.content} className={props.className}/>
}


export default ContentSection;