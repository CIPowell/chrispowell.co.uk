import React from 'react';

import './Page.scss';

const Home = (props) => {
        return <section className="page">
            <header className="page-header">
                <h2>{props.content.headline}</h2>
            </header>

            {props.content.sections.map((section, index) => {
                return <section className={['page-' + (index === 0 ? 'intro': 'body'), section.type].join(' ')} key={index}>
                    {(section.image ? <img src={section.image.src} alt={section.image.alt} /> : '')}
                    <p>{section.text}</p>
                </section>
            })}
        </section>;
    }

export default Home;