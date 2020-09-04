import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';

import Body from './layout/body/Body';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import store from './store/store';

import './index.scss';
import './transitions/sections.scss';
import { fetchPosts } from './store/blog/actions';

document.title = "Chris I Powell";

TagManager.initialize({
  gtmId: 'GTM-562XF3B'
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Body />
      <Footer />
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchPosts({ apiRoot: 'https://ugp71764c3.execute-api.eu-west-1.amazonaws.com/dev' }));