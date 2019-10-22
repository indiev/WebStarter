import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as Routes from './MainRoutes';

export default () => (
  <Router>
    <Switch>
      {Object.entries(Routes).map(([key, value]) => (
        <Route key={key} {...value} />
      ))}
    </Switch>
  </Router>
);
