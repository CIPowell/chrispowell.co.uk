import React, { Component } from "react";
import {Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withLocationHook } from '../../hooks/location';

class Body extends Component {
    render () {
        const location = this.props.location;

        return (<TransitionGroup>
            <CSSTransition key={location.key}
                classNames="sections"
                timeout={300}
            >
                <Switch location={location}>
                <Route path="/about">
                    <h2>About</h2>
                </Route>
                <Route path="/cv">
                    <h2>CV</h2>
                </Route>
                <Route path="/blog">
                    <h2>Thoughts</h2>
                </Route>
                <Route path="/">
                    <h2>Home</h2>
                </Route>
                </Switch>
            </CSSTransition>
            </TransitionGroup>);
    }
}


export default withLocationHook(Body);