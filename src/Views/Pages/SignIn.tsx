import React, { useRef } from 'react';
import FlexView from 'Components/View/FlexView';
import Container from 'Components/View/Container';
import TextField from 'Components/Field/TextField';
import Button from 'Components/Button/Button';
import Text from 'Components/Text/Text';

export default () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <Text xLarge bold>
        Sign In
      </Text>
      <FlexView style={{ padding: 15, width: 300 }}>
        <TextField
          name="Username"
          label
          placeholder="Please enter your username"
          ref={usernameRef}
        />
        <TextField
          style={{ marginTop: 10 }}
          type="password"
          name="Password"
          label
          placeholder="Please enter your password"
          ref={passwordRef}
        />
        <Button
          css={{
            padding: 12,
            marginTop: 15,
            backgroundColor: 'var(--primary)'
          }}
          onClick={() => alert(usernameRef.current!.value || '')}
        >
          <Text large bold>
            Sign In
          </Text>
        </Button>
      </FlexView>
    </Container>
  );
};
