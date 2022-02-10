import { Route, Switch } from 'react-router-dom';

import { FlexView } from '../../Components';
import Sidebar from '../Sidebar/Sidebar';

import * as Routes from './MainRoutes';

export default () => (
  <FlexView css={{ width: '100%', height: '100%' }} row>
    <Sidebar />
    <Switch>
      {Object.entries(Routes).map(([key, value]) => (
        <Route key={key} {...value} />
      ))}
    </Switch>
  </FlexView>
);
