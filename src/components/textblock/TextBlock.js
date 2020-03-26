import React from 'react';

const TextBlock = (props) => {
    return <section className="textblock">
        <p>{props.content.text}</p>
    </section>
}


export default TextBlock;