import React from 'react';
import * as Layout from 'Views/Layout';
import HeaderRouter from 'Routes/Header/HeaderRouter';
import MainRouter from 'Routes/Main/MainRouter';
import FooterRouter from 'Routes/Footer/FooterRouter';

export default () => (
  <Layout.Root>
    <Layout.Header>
      <HeaderRouter />
    </Layout.Header>
    <Layout.Main>
      <MainRouter />
    </Layout.Main>
    <Layout.Footer>
      <FooterRouter />
    </Layout.Footer>
  </Layout.Root>
);
