import React, { Component } from 'react';

import './About.scss';

export class About extends Component {

    render() {
        return (<section className="about">
            <header className="about-header">
                <h2>About</h2>
            </header>
            <section className="about-intro">
                <p>Chris is a technology leader in the UK</p>
            </section>
        </section>)
    }
}