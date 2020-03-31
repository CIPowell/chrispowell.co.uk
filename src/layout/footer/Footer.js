import React, { Component } from 'react';

import {ReactComponent as GithubIcon} from '../../static/assets/icons/github.svg';
import {ReactComponent as TwitterIcon} from '../../static/assets/icons/twitter.svg';
import {ReactComponent as LinkedInIcon} from '../../static/assets/icons/linkedin.svg';

import './Footer.scss';

export class Footer extends Component {
    render () {
        return <footer>
            <p>&copy; Chris I Powell 2020</p>
            <ul className="contact">
                <li>
                    <a href="https://twitter.com/ChrisIPowell" title="Chris on Twitter">
                        <TwitterIcon />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/CIPowell" title="Chris on Github">
                        <GithubIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/chris-i-powell/" title="Chris on LinkedIn" >
                        <LinkedInIcon />
                    </a>
                </li>
            </ul>
        </footer>;
    }
}