import React from 'react';
import * as Layout from 'Views/Layout';
import * as Pages from 'Views/Pages';
import 'App.scss';

const App: React.FC = () => (
  <>
    <Layout.Header />
    <Layout.Main>
      <Pages.Main />
    </Layout.Main>
    <Layout.Footer />
  </>
);

export default App;
