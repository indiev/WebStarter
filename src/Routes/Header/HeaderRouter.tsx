import Emotoin from '@emotion/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Link, NavLink } from 'Components/Link';
import { Text } from 'Components/Text';
import { FlexView } from 'Components/View';

const css: Emotoin.CSSObject = {
  position: 'fixed',
  width: '100%',
  height: '3rem',
  padding: '0 1rem',
  backgroundColor: 'var(--gray-dark)',
  top: 0
};

const Logo = () => (
  <Link to="/">
    <Text large medium>
      Logo
    </Text>
  </Link>
);
const Navbar = () => (
  <FlexView content="between" css={css} items="center" row>
    <Logo />
    <FlexView content="end" row>
      <NavLink css={{ padding: '0 5px' }} to="/signup">
        <Text medium>Sign Up</Text>
      </NavLink>
      <NavLink css={{ padding: '0 5px' }} to="/signin">
        <Text medium>Sign In</Text>
      </NavLink>
    </FlexView>
  </FlexView>
);

export default () => (
  <Switch>
    <Route component={Navbar} />
  </Switch>
);
