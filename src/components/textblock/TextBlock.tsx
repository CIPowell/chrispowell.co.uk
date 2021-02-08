import React, { FunctionComponent } from 'react';
import { IContentSectionProps } from '../contentsection/ContentSection';


export const TextBlock: FunctionComponent<IContentSectionProps> = (content: IContentSectionProps) => {
    return <p>{content.text}</p>
}