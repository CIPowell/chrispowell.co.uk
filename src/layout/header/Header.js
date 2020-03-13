import React, { Component } from 'react';
import { ReactComponent as CIPIcon } from "../../static/assets/CIP.svg";
import { Nav } from '../nav/Nav';

import './Header.scss';

export class Header extends Component {
    render() {
        return (<header>
            <CIPIcon height={75} />
            <h1>Chris I Powell</h1>
            <h2>Code and Hockey</h2>
            <Nav />
        </header>);
    }
    
}
