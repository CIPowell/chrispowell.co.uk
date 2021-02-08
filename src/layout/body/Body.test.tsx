import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Body from './Body';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

describe('the Body Component', () => {
  const mockStore = configureStore()({ blogStore: { posts: [] } });

  it('renders without crashing', () => {
    render(<Provider store={mockStore}>
      <Router initialEntries={["/"]}>
        <Body />
      </Router>
    </Provider>);
  });

  // it.each`
  //   page        | pagename
  //   ${'/'}      | ${'home'}
  //   ${'/about'} | ${'about'}
  //   ${'/cv'}    | ${'cv'}
  //   ${'/blog'}  | ${'blog'}
  // `('renders the $pagename page', ({page}) => {
  //   render(<Provider store={mockStore}><Router initialEntries={[page]} >
  //     <Body />
  //   </Router></Provider>);
  // });

  // it.each`
  //   page        
  //   ${'/blah'}     
  //   ${'/404'} 
  // `('renders an error page on $page', ({page}) => {
  //   const app = render(<Provider store={mockStore}><Router initialEntries={[page]} >
  //     <Body />
  //   </Router></Provider>);

  //   expect(app.findByText("This isn't the content you're looking for...")).toBeTruthy();
  // });
});