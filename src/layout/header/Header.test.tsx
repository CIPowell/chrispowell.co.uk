/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom'
import { act } from 'react-dom/test-utils';

import { Header } from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router initialEntries={["/"]}>
      <Header />
    </Router>, div);

    expect(location.pathname).toBe("/");
});

it('goes home when the home link is clicked', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router initialEntries={["/blog"]}>
      <Header />
    </Router>, div);

    const button = div.querySelector('.header-logo-link');

    act(() => {
        button?.dispatchEvent(new MouseEvent('click'));
    });

    expect(location.pathname).toBe("/");
});
