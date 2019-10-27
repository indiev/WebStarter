import React from 'react';
import Emotoin from '@emotion/core';
import { Route, Switch } from 'react-router-dom';
import Div from 'Components/View/Div';

const css: Emotoin.CSSObject = {
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: '3rem',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--gray-dark)',
  bottom: 0
};

const Navbar = () => <Div css={css}>Footer</Div>;

export default () => (
  <Switch>
    <Route component={Navbar} />
  </Switch>
);
