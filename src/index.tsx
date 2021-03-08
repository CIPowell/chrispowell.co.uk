import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';

import Body from './layout/body/Body';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import Nav from './layout/nav/Nav';
import store from './store/store';

import './index.scss';
import './transitions/sections.scss';
import { fetchPosts } from './store/blog/actions';
import { IContext, getContext } from './config/Config';
import { fetchNav } from './store/nav/actions';

const ctx: IContext = getContext();

document.title = ctx.siteTitle;

TagManager.initialize({
  gtmId: 'GTM-562XF3B'
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Nav />
      <Body />
      <Footer />
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchPosts(ctx));
store.dispatch(fetchNav(ctx));