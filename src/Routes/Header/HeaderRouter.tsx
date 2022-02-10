import { CSSObject } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import { Icon } from 'Components/Icon';
import { Link, NavLink } from 'Components/Link';
import { Text } from 'Components/Text';
import { FlexView } from 'Components/View';
import { Colors } from 'Styles/Theme';

const css: CSSObject = {
  // position: 'fixed',
  width: '100%',
  height: '3rem',
  padding: '0 1rem',
  // backgroundColor: 'var(--gray)',
  backgroundColor: Colors.primary,
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  top: 0
};

const Logo = () => {
  const [t] = useTranslation('header');

  return (
    <Link to="/">
      <FlexView center row>
        <Icon color={Colors.white} css={{ marginRight: 5 }} name="logo" />
        <Text black large>
          {t('logo')}
        </Text>
      </FlexView>
    </Link>
  );
};

const Navbar = () => {
  const [t] = useTranslation('header');

  return (
    <FlexView content="between" css={css} items="center" row>
      <Logo />
      <FlexView content="end" gap={8} row>
        <NavLink css={{ padding: '0 5px' }} to="/signup">
          <Text medium>어쩌구</Text>
        </NavLink>
        <NavLink css={{ padding: '0 5px' }} to="/signin">
          <Text medium>헤더라우터에있어용</Text>
        </NavLink>
      </FlexView>
    </FlexView>
  );
};

export default () => (
  <Routes>
    <Route>
      <Navbar />
    </Route>
  </Routes>
);
