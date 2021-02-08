import React, { FunctionComponent } from 'react';
import { IContentSectionProps } from '../contentsection/ContentSection';

import './SectionSubHeader.scss';

export const SectionSubHeader : FunctionComponent<IContentSectionProps> = (content: IContentSectionProps) => {
    return <h3>{content.text}</h3>
};