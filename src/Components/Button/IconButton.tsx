import React from 'react';
import Icon from 'Components/Icon/Icon';
import Button, { Props as ButtonProps } from './Button';

interface Props extends ButtonProps {
  name: string;
}

export default ({ name, style, ...props }: Props) => {
  const styles = {
    padding: 5,
    margin: -5,
    ...style
  };
  return (
    <Button style={styles} {...props}>
      <Icon name={name} />
    </Button>
  );
};
