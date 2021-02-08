import React, { FunctionComponent } from 'react';
import { IContentSectionProps } from '../contentsection/ContentSection';

import './TwoColumn.scss';

export interface IIimage {
  src: string,
  alt: string
}

export const TwoColumn: FunctionComponent<IContentSectionProps> = (props) => {
    return <section className={'two_column ' + props.className}>
    {(props.image ? <img src={props.image.src} alt={props.image.alt} /> : '')}
    <p>{props.text}</p>
  </section>
}


export default TwoColumn;