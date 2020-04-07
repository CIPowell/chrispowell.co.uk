import React from 'react';

import './SectionHeader.scss';

const SectionHeader = (props) => {
    return <h2>{props.content.text}</h2>
}

export default SectionHeader