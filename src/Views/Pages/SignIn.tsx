import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from 'Components/Button/Button';
import TextField from 'Components/Field/TextField';
import Form from 'Components/Form/Form';
import Text from 'Components/Text/Text';
import { View } from 'Components/View';
import Container from 'Components/View/Container';
import FlexView from 'Components/View/FlexView';
import { Colors } from 'Styles/Theme';

type FormData = {
  username: string;
  password: string;
};

export default () => {
  const [t] = useTranslation('signIn');
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
          <View>
            <TextField
              ref={register({ required: true })}
              autoComplete="username"
              name="username"
              label
            />
          </View>
          <View css={{ marginTop: 5 }}>
            <TextField
              ref={register({ required: true })}
              autoComplete="new-password"
              name="password"
              type="password"
              label
            />
          </View>
          <FlexView>
            <Button
              css={{
                padding: 12,
                marginTop: 15,
                backgroundColor: Colors.primary
              }}
              type="submit"
            >
              <Text large medium>
                {t('confirmButton')}
              </Text>
            </Button>
          </FlexView>
        </Form>
      </FlexView>
    </Container>
  );
};
