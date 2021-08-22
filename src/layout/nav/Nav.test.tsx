import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom'

import { Nav } from './Nav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router initialEntries={["/"]}>
      <Nav />
    </Router>, div);
});