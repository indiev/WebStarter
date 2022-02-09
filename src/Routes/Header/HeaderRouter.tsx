import Emotion from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';

import { Icon } from 'Components/Icon';
import { Link, NavLink } from 'Components/Link';
import { Text } from 'Components/Text';
import { FlexView } from 'Components/View';
import { Colors } from 'Styles/Theme';

const css: Emotion.CSSObject = {
  // position: 'fixed',
  width: '100%',
  height: '3rem',
  padding: '0 1rem',
  backgroundColor: 'var(--gray)',
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
      <FlexView content="end" row>
        <NavLink css={{ padding: '0 5px' }} to="/signup">
          <Text medium>{t('signUp')}</Text>
        </NavLink>
        <NavLink css={{ padding: '0 5px' }} to="/signin">
          <Text medium>{t('signIn')}</Text>
        </NavLink>
      </FlexView>
    </FlexView>
  );
};

export default () => (
  <Switch>
    <Route>
      <Navbar />
    </Route>
  </Switch>
);
