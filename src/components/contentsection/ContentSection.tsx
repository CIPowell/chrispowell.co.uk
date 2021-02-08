import React, { FunctionComponent } from 'react';
import { TextBlock } from '../textblock/TextBlock';
import { TwoColumn, IIimage } from '../twocolumn/TwoColumn';
import { SectionHeader } from '../sectionheader/SectionHeader';
import { SectionSubHeader } from '../sectionsubheader/SectionSubHeader';
import { BlogRibbon } from '../blog/ribbon/BlogRibbon';
import { IBlogPostList } from '../../store/blog/store';

const Blocks: {[id: string]: FunctionComponent<IContentSectionProps>} = {
    'two_column': TwoColumn,
    'text_block' : TextBlock,
    'section_header': SectionHeader,
    'section_subheader' : SectionSubHeader,
    'blog_ribbon': BlogRibbon
}

export interface IContentSectionProps {
    type: string,
    text?: string
    className?: string,
    image?: IIimage
    posts?: IBlogPostList
}

export const ContentSection : FunctionComponent<IContentSectionProps> = (props: IContentSectionProps) => {
    const BlockType: FunctionComponent<IContentSectionProps> = Blocks[props.type];
    return <BlockType {...props} />
}