import React, { Component } from 'react';

import './Nav.scss';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render () {
        return (<nav className="main">
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/cv">CV</Link>
        </nav>);
    }
}