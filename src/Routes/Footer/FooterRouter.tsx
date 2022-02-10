import { CSSObject } from '@emotion/react';
import { ChangeEvent, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { FlexView } from 'Components';
import View from 'Components/View/View';
import { Colors } from 'Styles/Theme';

const css: CSSObject = {
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
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue}`);
  };

  return <FlexView>Footer</FlexView>;
};

export default () => (
  <Routes>
    <Route>
      {/* {Navbar} */}
      <Navigation />
    </Route>
  </Routes>
);
