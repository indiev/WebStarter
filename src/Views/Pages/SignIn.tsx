import React from 'react';
import { useForm } from 'react-hook-form';
import FlexView from 'Components/View/FlexView';
import Container from 'Components/View/Container';
import TextField from 'Components/Field/TextField';
import Button from 'Components/Button/Button';
import Text from 'Components/Text/Text';
import Form from 'Components/Form/Form';

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
      <Text xLarge bold>
        Sign In
      </Text>
      <FlexView style={{ padding: 15, width: 300 }}>
        <Form onSubmit={handleSubmit(onSumbit)}>
          <TextField
            name="username"
            label
            placeholder="Please enter your username"
            ref={register({ required: true })}
          />
          <TextField
            style={{ marginTop: 10 }}
            type="password"
            name="password"
            label
            placeholder="Please enter your password"
            ref={register({ required: true })}
          />
          <Button
            type="submit"
            css={{
              padding: 12,
              marginTop: 15,
              backgroundColor: 'var(--primary)'
            }}
          >
            <Text large bold>
              Sign In
            </Text>
          </Button>
        </Form>
      </FlexView>
    </Container>
  );
};
