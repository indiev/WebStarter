import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import OutlinedTextField from '../../Components/Field/OutlinedTextField';

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
    /* eslint-disable no-console */
    console.log(data);
    /* eslint-disable no-console */
  };

  return (
    <FlexView css={{ width: '100%' }} items="center">
      <Text medium xLarge>
        {t('title')}
      </Text>
      <FlexView css={{ padding: '0 16px', width: 360 }}>
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
              autoComplete="password"
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
              <Text color="white" large medium>
                {t('submitButton')}
              </Text>
            </Button>
          </FlexView>
        </Form>
      </FlexView>
      <OutlinedTextField label="테스트" />
    </FlexView>
  );
};
