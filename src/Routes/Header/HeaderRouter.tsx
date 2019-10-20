import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav
    style={{
      position: 'fixed',
      display: 'flex',
      width: '100%',
      height: '3rem',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--gray-dark)',
      top: 0
    }}
  >
    Header
  </nav>
);

export default () => (
  <Router>
    <Switch>
      <Route component={Navbar} />
    </Switch>
  </Router>
);
