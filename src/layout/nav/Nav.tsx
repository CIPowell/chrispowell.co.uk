import { FunctionComponent } from 'react';

import './Nav.scss';
import { Link } from 'react-router-dom';

export const Nav: FunctionComponent<Record<string, unknown>> = () => {
    return (<nav className="main">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/cv">CV</Link>
    </nav>);
}
