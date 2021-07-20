import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';
import { Logger } from 'aws-amplify';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from 'Components/Form/Form';
import { Link } from 'Components/Link';
import Text from 'Components/Text/Text';
import FlexView from 'Components/View/FlexView';
import { AuthState, useAuthContext } from 'Context';

type FormData = {
  username: string;
  password: string;
};

type Props = {
  dialog?: boolean;
};

const logger = new Logger('SignIn');

export default ({ dialog }: Props) => {
  const [t] = useTranslation('signIn');
  const { errors, handleSubmit, register, setError } = useForm<FormData>({
    mode: 'onChange'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { signIn, setAuthState } = useAuthContext();

  const onSumbit = async (data: FormData) => {
    // {
    //   "AuthenticationResult": {
    //     "AccessToken": "...",
    //     "ExpiresIn": 3600,
    //     "IdToken": "...",
    //     "TokenType": "Bearer"
    //   },
    //   "ChallengeParameters": {}
    // }
    // {
    //   "username": "test",
    //   "pool": {
    //     "userPoolId": "ap-northeast-2_6We96vE6C",
    //     "clientId": "786nfu4mf9psheej31as80okjb",
    //     "client": {
    //       "endpoint": "https://cognito-idp.ap-northeast-2.amazonaws.com/"
    //     },
    //     "advancedSecurityDataCollectionFlag": true,
    //     "storage": { ... }
    //   },
    //   "Session": null,
    //   "client": {
    //     "endpoint": "https://cognito-idp.ap-northeast-2.amazonaws.com/"
    //   },
    //   "signInUserSession": {
    //     "idToken": {
    //       "jwtToken": "...",
    //       "payload": { ... }
    //     },
    //     "refreshToken": {
    //       "token": "..."
    //     },
    //     "accessToken": {
    //       "jwtToken": "...",
    //       "payload": { ... }
    //     },
    //     "clockDrift": 0
    //   },
    //   "authenticationFlowType": "USER_SRP_AUTH",
    //   "storage": { ... },
    //   "keyPrefix": "CognitoIdentityServiceProvider.786nfu4mf9psheej31as80okjb",
    //   "userDataKey": "CognitoIdentityServiceProvider.786nfu4mf9psheej31as80okjb.test.userData",
    //   "attributes": {
    //     "sub": "727aebde-6b30-444d-a0de-73fca9db956a",
    //     "email_verified": true,
    //     "email": "ehnawh@gmail.com"
    //   },
    //   "preferredMFA": "NOMFA"
    // }
    console.log(data);
    setLoading(true);
    try {
      console.log(111);
      const user = await signIn(data);
      setSuccess(true);
      logger.debug(user);
    } catch (e) {
      console.log(e);
      if (e.name === 'UserNotFoundException') {
        setError('username', e.name, e.message);
      }
      // if (e.name === 'UserNotConfirmedException') {
      //   setError('username', e.name, e.message);
      // }
      if (e.name === 'NotAuthorizedException') {
        setError('password', e.name, e.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const Title = dialog ? DialogTitle : FlexView;
  const Content = dialog ? DialogContent : FlexView;
  const Actions = dialog ? DialogActions : FlexView;

  return (
    <Form onSubmit={handleSubmit(onSumbit)}>
      <Title>{t('title')}</Title>
      <Content>
        <TextField
          autoComplete="off"
          error={!!errors.username}
          helperText={errors.username?.message || ' '}
          inputRef={register}
          label="Username"
          name="username"
          fullWidth
          required
        />
        <TextField
          autoComplete="off"
          error={!!errors.password}
          helperText={errors.password?.message || ' '}
          inputRef={register}
          label="Password"
          name="password"
          type="password"
          fullWidth
          required
        />
        <FlexView css={{ marginTop: 5, justifyContent: 'flex-end' }} row>
          <Button onClick={() => setAuthState(AuthState.SignUp)}>
            <Text small>Sign Up</Text>
          </Button>
        </FlexView>
      </Content>
      <Actions>
        <Button
          color="primary"
          disabled={loading}
          type="submit"
          variant="contained"
          fullWidth
        >
          {loading && (
            <Box
              alignItems="center"
              css={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              display="flex"
              justifyContent="center"
              position="absolute"
            >
              <CircularProgress color="secondary" size={20} thickness={3} />
            </Box>
          )}
          {t('submitButton')}
        </Button>
      </Actions>
    </Form>
  );
};
