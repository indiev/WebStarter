import React from 'react';
import Emotoin from '@emotion/core';
import { Route, Switch } from 'react-router-dom';
import { FlexView } from 'Components/View';
import { Link, NavLink } from 'Components/Link';
import { Text } from 'Components/Text';

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
    <Text bold large>
      Logo
    </Text>
  </Link>
);
const Navbar = () => (
  <FlexView row content="between" items="center" css={css}>
    <Logo />
    <FlexView row grow={1} center>
      <NavLink to="/signup">
        <Text bold>Sign Up</Text>
      </NavLink>
      <NavLink to="/signin">
        <Text bold>Sign In</Text>
      </NavLink>
    </FlexView>
  </FlexView>
);

export default () => (
  <Switch>
    <Route component={Navbar} />
  </Switch>
);
