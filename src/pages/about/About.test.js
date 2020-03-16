import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom'

import { About } from './About';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router initialEntries={["/"]}>
      <About />
    </Router>, div);
});