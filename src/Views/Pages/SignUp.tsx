import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from 'Components/Form/Form';
import { Link } from 'Components/Link';
import Text from 'Components/Text/Text';
import { View } from 'Components/View';
// import Container from 'Components/View/Container';
import FlexView from 'Components/View/FlexView';
import { AuthState, useAuthContext } from 'Context';
import { FontSizes } from 'Styles/Theme';

type FormData = {
  username: string;
  password: string;
  email: string;
};

type Props = {
  dialog?: boolean;
};

export default ({ dialog }: Props) => {
  const [t] = useTranslation('signUp');
  const { errors, register, handleSubmit } = useForm<FormData>({
    mode: 'onChange'
  });
  const [requestFending, setRequestFending] = useState(false);
  const { signUp, setAuthState } = useAuthContext();

  const onSumbit = async (data: FormData) => {
    // {s
    //   "CodeDeliveryDetails": {
    //     "AttributeName": "email",
    //     "DeliveryMedium": "EMAIL",
    //     "Destination": "e***@g***.com"
    //   },
    //   "UserConfirmed": false,
    //   "UserSub": "727aebde-6b30-444d-a0de-73fca9db956a"
    // }
    console.log(data);
    setRequestFending(true);
    await signUp(data);
    setRequestFending(false);
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
          inputRef={register({ required: 'Username required' })}
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
        <TextField
          autoComplete="off"
          error={!!errors.email}
          helperText={errors.email?.message || ' '}
          inputRef={register}
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
        />
        <FlexView css={{ marginTop: 5, justifyContent: 'flex-end' }} row>
          <Button onClick={() => setAuthState(AuthState.SignIn)}>
            <Text small>Sign In</Text>
          </Button>
        </FlexView>
      </Content>
      <Actions>
        <Button
          color="primary"
          disabled={requestFending}
          type="submit"
          variant="contained"
          fullWidth
        >
          {requestFending ? (
            <CircularProgress size={FontSizes.medium} />
          ) : (
            <Text medium>{t('submitButton')}</Text>
          )}
        </Button>
      </Actions>
    </Form>
  );
};
