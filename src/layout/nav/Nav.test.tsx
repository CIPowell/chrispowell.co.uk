import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom'
import { INavLink } from '../../store/nav/actions';

import { Nav } from './Nav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router initialEntries={["/"]}>
      <Nav links={new Array<INavLink>()} loading={false} error={""} />
    </Router>, div);
});