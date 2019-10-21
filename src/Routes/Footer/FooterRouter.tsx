import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Navbar = () => (
  <nav
    style={{
      position: 'fixed',
      display: 'flex',
      width: '100%',
      height: '3rem',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--gray-dark)',
      bottom: 0
    }}
  >
    Footer
  </nav>
);

export default () => (
  <Router>
    <Switch>
      <Route component={Navbar} />
    </Switch>
  </Router>
);
