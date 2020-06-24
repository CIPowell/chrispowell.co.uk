import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Body from './Body';
import { shallow, mount } from 'enzyme';
import Page from '../page/Page';
import ErrorPage from '../errorpage/ErrorPage';
import { Provider } from 'react-redux';

describe('the Body Component', () => {
  const mockStore = configureStore()({ blogStore: {} });

  it('renders without crashing', () => {
    shallow(<Provider store={mockStore}>
      <Router initialEntries={["/"]}>
        <Body />
      </Router>
    </Provider>);
  });

  it.each`
    page        | pagename
    ${'/'}      | ${'home'}
    ${'/about'} | ${'about'}
    ${'/cv'}    | ${'cv'}
    ${'/blog'}  | ${'blog'}
  `
  ('renders the $pagename page', ({page}) => {
    const app = mount(<Provider store={mockStore}><Router initialEntries={[page]} >
      <Body />
    </Router></Provider>);

    const pages = app.find(Page);
    expect(pages.length).toBe(1);

    const errorPages = app.find(ErrorPage);
    expect(errorPages.length).toBe(0);
  });

  it.each`
    page        
    ${'/blah'}     
    ${'/404'} 
  `
  ('renders an error page on $page', ({page}) => {
    const app = mount(<Provider store={mockStore}><Router initialEntries={[page]} >
      <Body />
    </Router></Provider>);

    const pages = app.find(Page);
    expect(pages.length).toBe(0);

    const errorPages = app.find(ErrorPage);
    expect(errorPages.length).toBe(1);
    expect(errorPages.find('h2').text()).toBe("This isn't the content you're looking for...")
  });
});