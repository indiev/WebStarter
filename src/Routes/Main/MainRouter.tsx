import { Route, Routes } from 'react-router-dom';

import { FlexView } from '../../Components';
import Sidebar from '../Sidebar/Sidebar';

import * as MainRoutes from './MainRoutes';

export default () => (
  <FlexView css={{ width: '100%', height: '100%' }} row>
    <Sidebar />
    <Routes>
      {Object.entries(MainRoutes).map(([key, value]) => (
        <Route key={key} {...value} />
      ))}
    </Routes>
  </FlexView>
);
