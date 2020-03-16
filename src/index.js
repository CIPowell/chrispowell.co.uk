import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './layout/header/Header';
import Body from './layout/body/Body';

import './index.scss';
import './transitions/sections.scss';
import { Footer } from './layout/footer/Footer';

document.title = "Chris I Powell";

ReactDOM.render(
  <Router>
    <Header />
    <Body />
    <Footer />
  </Router>,
  document.getElementById('root')
);
  