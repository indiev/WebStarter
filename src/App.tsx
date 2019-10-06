import React from 'react';
import * as Layout from 'Views/Layout';
import MainRouter from 'Routes/MainRouter';

const App: React.FC = () => (
  <>
    <Layout.Header />
    <Layout.Main>
      <MainRouter />
    </Layout.Main>
    <Layout.Footer />
  </>
);

export default App;
