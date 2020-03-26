import React from 'react';

import './TwoColumn.scss';

const TwoColumn = (props) => {
    return <section className={'two_column ' + props.className}>
    {(props.content.image ? <img src={props.content.image.src} alt={props.content.image.alt} /> : '')}
    <p>{props.content.text}</p>
  </section>
}


export default TwoColumn;