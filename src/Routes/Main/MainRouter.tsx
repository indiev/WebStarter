import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as Routes from './MainRoutes';

export default () => (
  <Switch>
    {Object.entries(Routes).map(([key, value]) => (
      <Route key={key} {...value} />
    ))}
  </Switch>
);
