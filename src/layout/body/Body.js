import React, { Component } from "react";
import {Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withLocationHook } from '../../hooks/location';
import Page from "../../pages/page/Page"; 

import homepageData from '../../static/data/homepage.json';
import aboutData from '../../static/data/about.json';
import blogData from '../../static/data/blog.json';
import cvData from '../../static/data/cv.json';

class Body extends Component {
    render () {
        const location = this.props.location;

        return (<div className="container">
            <TransitionGroup>
                <CSSTransition key={location.key}
                    classNames="sections"
                    timeout={300}
                >
                    <Switch location={location}>
                        <Route path="/about" render={(props) => <Page {...props} content={aboutData}/>} />
                        <Route path="/cv" render={(props) => <Page {...props} content={cvData} /> }/> 
                        <Route path="/blog" render={(props) => <Page {...props} content={blogData} />} />
                        <Route path="/" exact={true} render={(props) => <Page {...props} content={homepageData}/>} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            </div>);
    }
}


export default withLocationHook(Body);