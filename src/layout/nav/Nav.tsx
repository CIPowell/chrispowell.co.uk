import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Nav.scss';

import { NavStore } from '../../store/nav/nav';

export const Nav : FunctionComponent<NavStore> = (props) =>
    <nav className="main">
        { props.links?.map(link => <Link to={link.slug}>{link.title}</Link>)}
    </nav>;

const mapStatetoProps = ({ nav } : { nav : NavStore }) => {
    return nav;
}

export default connect(mapStatetoProps)(Nav);