import React from 'react';
import Emotoin from '@emotion/core';

import Icon from 'Components/Icon/Icon';
import Button, { Props as ButtonProps } from './Button';

export type Props = ButtonProps & {
  name: string;
};

const css: Emotoin.CSSObject = {
  padding: '0.3rem',
  margin: '-0.3rem'
};

export default ({ name, ...props }: Props) => (
  <Button css={css} {...props}>
    <Icon name={name} />
  </Button>
);
