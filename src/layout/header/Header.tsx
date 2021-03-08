import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CIPIcon } from "../../static/assets/CIP.svg";

import './Header.scss';

export const Header: FunctionComponent<unknown> = () => {
    return (<header>
        <Link to="/" className="header-logo-link"><CIPIcon height={75} /></Link>
        <h1>Chris I Powell</h1>
        <h2>Software Engineer/Architecht, Technologist, Dad, Cricketer, Hockey Player etc.</h2>
    </header>);
}
