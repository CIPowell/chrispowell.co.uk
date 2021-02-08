import React, { FunctionComponent } from 'react';
import { IContentSectionProps } from '../contentsection/ContentSection';

import './SectionHeader.scss';


export const SectionHeader : FunctionComponent<IContentSectionProps> = (content : IContentSectionProps) => {
    return <h2>{content.text}</h2>
}