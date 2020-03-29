import React from 'react';
import TextBlock from '../textblock/TextBlock';
import TwoColumn from '../twocolumn/TwoColumn';

const Blocks = {
    'two_column': TwoColumn,
    'textblock' : TextBlock
}

const ContentSection = (props) => {
    const BlockType = Blocks[props.content.type];
    return <BlockType content={props.content} className={props.className}/>
}


export default ContentSection;