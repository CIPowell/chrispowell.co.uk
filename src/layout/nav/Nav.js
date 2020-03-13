import React, { Component } from 'react';

import './Nav.scss';

export class Nav extends Component {
    render () {
        return (<nav className="main">
            <a href="./about">About</a>
            <a href="./thoughts">Blog</a>
            <a href="./cv">CV</a>
        </nav>);
    }
}