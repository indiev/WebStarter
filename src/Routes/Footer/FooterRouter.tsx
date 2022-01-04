import Emotoin from '@emotion/react';
import { ChangeEvent, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { FlexView } from 'Components';
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
  const [value, setValue] = useState('posts');
  const history = useHistory();

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(`/${newValue}`);
  };

  return <FlexView>test</FlexView>;
};

export default () => (
  <Switch>
    <Route>
      <Navigation />
    </Route>
  </Switch>
);
