import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from 'Components/Button/Button';
import TextField from 'Components/Field/TextField';
import Form from 'Components/Form/Form';
import Text from 'Components/Text/Text';
import Container from 'Components/View/Container';
import FlexView from 'Components/View/FlexView';

type FormData = {
  username: string;
  password: string;
};

export default () => {
  const [t] = useTranslation('signUp');
  const { register, handleSubmit } = useForm<FormData>({ mode: 'onChange' });

  const onSumbit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <Text medium xLarge>
        {t('title')}
      </Text>
      <FlexView css={{ padding: 15, width: 300 }}>
        <Form onSubmit={handleSubmit(onSumbit)}>
          <TextField
            ref={register({ required: true })}
            autoComplete="username"
            name="username"
            placeholder="Please enter your username"
            label
          />
          <TextField
            ref={register({ required: true })}
            autoComplete="new-password"
            css={{ marginTop: 10 }}
            name="password"
            placeholder="Please enter your password"
            type="password"
            label
          />
          <Button
            css={{
              padding: 12,
              marginTop: 15,
              backgroundColor: 'var(--primary)'
            }}
            type="submit"
          >
            <Text large medium>
              Sign Up
            </Text>
          </Button>
        </Form>
      </FlexView>
    </Container>
  );
};
