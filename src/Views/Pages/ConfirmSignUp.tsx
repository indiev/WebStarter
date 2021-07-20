import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField
} from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from 'Components/Form/Form';
import FlexView from 'Components/View/FlexView';
import { useAuthContext } from 'Context';

type FormData = {
  // username: string;
  code: string;
};

type Props = {
  dialog?: boolean;
};

export default ({ dialog }: Props) => {
  const [t] = useTranslation('confirmSignUp');
  const { errors, register, handleSubmit } = useForm<FormData>({
    mode: 'onSubmit'
  });
  const { confirmSignUp } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const onSumbit = async (data: FormData) => {
    // {
    //   "CodeDeliveryDetails": {
    //     "AttributeName": "email",
    //     "DeliveryMedium": "EMAIL",
    //     "Destination": "e***@g***.com"
    //   },
    //   "UserConfirmed": false,
    //   "UserSub": "727aebde-6b30-444d-a0de-73fca9db956a"
    // }
    const { code } = data;
    setLoading(true);
    await confirmSignUp(code);
    setLoading(false);
  };

  const Title = dialog ? DialogTitle : FlexView;
  const Content = dialog ? DialogContent : FlexView;
  const Actions = dialog ? DialogActions : FlexView;

  return (
    <Form onSubmit={handleSubmit(onSumbit)}>
      <Title>{t('title')}</Title>
      <Content>
        {/* <View>
            <TextField
              ref={register({ required: true })}
              autoComplete="username"
              name="username"
              label
            />
          </View> */}
        <TextField
          autoComplete="off"
          error={!!errors.code}
          helperText={errors.code?.message || ' '}
          inputRef={register({
            minLength: { value: 6, message: 'Length is 6' },
            maxLength: { value: 6, message: 'Length is 6' }
          })}
          label="Code"
          name="code"
          type="number"
          fullWidth
          required
        />
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
