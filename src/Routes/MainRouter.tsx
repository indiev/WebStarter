import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as Routes from './MainRoutes';

const MainRouter: React.FC = () => (
  <Router>
    {Object.entries(Routes).map(([key, value]) => (
      <Route key={key} {...value} />
    ))}
  </Router>
);

export default MainRouter;
