import React from 'react';
import { useForm } from 'react-hook-form';

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
  const { register, handleSubmit } = useForm<FormData>({ mode: 'onChange' });

  const onSumbit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <Text bold xLarge>
        Sign In
      </Text>
      <FlexView style={{ padding: 15, width: 300 }}>
        <Form onSubmit={handleSubmit(onSumbit)}>
          <TextField
            ref={register({ required: true })}
            name="username"
            placeholder="Please enter your username"
            label
          />
          <TextField
            ref={register({ required: true })}
            name="password"
            placeholder="Please enter your password"
            style={{ marginTop: 10 }}
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
            <Text bold large>
              Sign In
            </Text>
          </Button>
        </Form>
      </FlexView>
    </Container>
  );
};
