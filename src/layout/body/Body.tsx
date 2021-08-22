import React, { FunctionComponent } from "react";
import {Switch, Route, useLocation, useParams } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Page from '../page/Page'; 
import BlogPage from '../blog/BlogPage';
import ErrorPage from "../errorpage/ErrorPage";

import homepageData from '../../static/data/homepage.json';
import aboutData from '../../static/data/about.json';
import cvData from '../../static/data/cv.json';

const Body: FunctionComponent = () => {
    const location = useLocation();
    const params = useParams();

    return (<div className="container">
        <TransitionGroup>
            <CSSTransition key={location.key}
                classNames="sections"
                timeout={300}
            >
                <Switch location={location}>
                    <Route path="/about" render={(props) => <Page {...props} content={aboutData}/>} />
                    <Route path="/cv" render={(props) => <Page {...props} content={cvData} /> }/> 
                    <Route path="/blog" exact={true} render={() => <BlogPage />} />
                    <Route path="/blog/:slug" render={() => <BlogPage {...params}/>} />
                    <Route path="/" exact={true} render={(props) => <Page {...props} content={homepageData}/>} />
                    <Route path="*" render={(props) => <ErrorPage {...props} code={404} />} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
        </div>);
};

export default Body;