import Emotoin from '@emotion/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import View from 'Components/View/View';
import { Colors } from 'Styles/Theme';

const css: Emotoin.CSSObject = {
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: '3rem',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.grayDark,
  bottom: 0
};

const Navbar = () => <View css={css}>Footer</View>;

export default () => (
  <Switch>
    <Route component={Navbar} />
  </Switch>
);
