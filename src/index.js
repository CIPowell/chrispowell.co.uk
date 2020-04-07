import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TagManager from 'react-gtm-module';

import Body from './layout/body/Body';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import './index.scss';
import './transitions/sections.scss';

document.title = "Chris I Powell";

TagManager.initialize({
  gtmId: 'GTM-562XF3B'
});

ReactDOM.render(
  <Router>
    <Header />
    <Body />
    <Footer />
  </Router>,
  document.getElementById('root')
);