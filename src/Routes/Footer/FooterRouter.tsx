import Emotoin from '@emotion/core';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box
} from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
  Favorite as FavoriteIcon,
  Restore as RestoreIcon
} from '@material-ui/icons';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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
const Navigation = () => {
  const [value, setValue] = React.useState('posts');
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(`/${newValue}`);
  };

  return (
    <Box position="fixed" style={{ bottom: 0, width: '100%' }}>
      <BottomNavigation value={value} showLabels onChange={handleChange}>
        <BottomNavigationAction
          icon={<RestoreIcon />}
          label="Posts"
          value="posts"
        />
        <BottomNavigationAction
          icon={<FavoriteIcon />}
          label="Favorites"
          value="favorites"
        />
        <BottomNavigationAction
          icon={<AccountCircleIcon />}
          label="Me"
          value="me"
        />
      </BottomNavigation>
    </Box>
  );
};

export default () => (
  <Switch>
    <Route component={Navigation} />
  </Switch>
);
