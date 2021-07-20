import { AppBar, Button, Dialog, Toolbar } from '@material-ui/core';
import { AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';

import { Icon } from 'Components/Icon';
import { Link } from 'Components/Link';
import { Text } from 'Components/Text';
import { FlexView } from 'Components/View';
import { AuthState, useAuthContext } from 'Context';
import { Colors } from 'Styles/Theme';
import { ConfirmSignUp, SignIn, SignUp } from 'Views/Pages';

// const headerSize: Emotoin.CSSObject = {
//   width: '100%',
//   height: '3rem'
// };

// const css: Emotoin.CSSObject = {
//   position: 'fixed',
//   padding: '0 1rem',
//   backgroundColor: 'var(--gray-dark)',
//   top: 0,
//   ...headerSize
// };

const Logo = () => {
  const [t] = useTranslation('header');

  return (
    <Link to="/">
      <FlexView center row>
        <Icon color={Colors.white} css={{ marginRight: 5 }} name="logo" />
        <Text black>{t('logo')}</Text>
      </FlexView>
    </Link>
  );
};

const SignButton = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const { authState, setAuthState } = useAuthContext();
  let Component = SignIn;
  if (authState === AuthState.SignUp) {
    Component = SignUp;
  } else if (
    [AuthState.ConfirmSignUp, AuthState.ConfirmSignIn].includes(authState)
  ) {
    Component = ConfirmSignUp;
  }

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
          setAuthState(AuthState.SignIn);
        }}
      >
        Sign In
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Component dialog />
      </Dialog>
    </>
  );
};

const Navbar = () => {
  const [t] = useTranslation('header');
  const { authData, signOut } = useAuthContext();

  return (
    <AppBar position="static">
      {/* <View css={headerSize} /> */}
      {/* <FlexView content="between" css={css} items="center" row> */}
      <Toolbar>
        <Logo />
        <FlexView css={{ flexGrow: 1 }} />
        <Text
          css={{ cursor: 'pointer', paddingRight: 5 }}
          bold
          onClick={() => {
            fetch('http://localhost:4000/usera', {
              method: 'GET',
              headers: {
                Authorization: 'Bearer 4i1emvgw4igs0zq3zlz173oy9jjvp4'
              },
              mode: 'no-cors'
            }).then(async (response) => {
              const contentType = response.headers.get('content-type') || '';
              const result = await response.json();
              console.log(result);
              return result;
            });
          }}
        >
          User
        </Text>
        <Text
          css={{ cursor: 'pointer', paddingRight: 5 }}
          bold
          onClick={() => {
            fetch('http://localhost:4000/test', {
              method: 'GET',
              headers: {
                Authorization: 'Bearer 4i1emvgw4igs0zq3zlz173oy9jjvp4'
              },
              mode: 'no-cors'
            }).then(async (response) => {
              const contentType = response.headers.get('content-type') || '';
              const result = await response.text();
              console.log(result);
              return result;
            });
          }}
        >
          Test
        </Text>
        <Text
          css={{ cursor: 'pointer' }}
          bold
          onClick={() => {
            window.location.replace('http://localhost:4000/auth/twitch');
            // fetch('http://localhost:4000/auth/twitch', {
            //   method: 'GET',
            //   mode: 'no-cors'
            // }).then((response) => {
            //   const contentType = response.headers.get('content-type') || '';
            //   if (contentType.includes('application/json')) {
            //     return response.json();
            //   }
            // });
          }}
        >
          TWITCH IN
        </Text>
        {/* <NavLink css={{ padding: '0 5px' }} to="/signup">
            <Text medium>{t('signUp')}</Text>
          </NavLink> */}
        {/* <NavLink css={{ padding: '0 5px' }} to="/signup/confirm">
            <Text medium>{t('confirmSignUp')}</Text>
          </NavLink> */}
        {!authData ? (
          <SignButton />
        ) : (
          <>
            <AccountCircleIcon />
            <Text css={{ marginLeft: 5, marginRight: 3 }} bold>
              {authData.username}
            </Text>
            <Button onClick={signOut}>{t('signOut')}</Button>
          </>
        )}
        {/* <NavLink css={{ padding: '0 5px' }} to="/list">
            <Text medium>{t('list')}</Text>
          </NavLink> */}
      </Toolbar>
      {/* </FlexView> */}
    </AppBar>
  );
};

export default () => (
  <Switch>
    <Route component={Navbar} />
  </Switch>
);
