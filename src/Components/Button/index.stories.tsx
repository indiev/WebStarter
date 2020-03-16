import React from 'react';

import Button from './Button';
import IconButton from './IconButton';

export default {
  title: 'Button'
};

export const Buttons = () => (
  <>
    <Button css={{ backgroundColor: 'var(--blue)' }}>Default Button</Button>
  </>
);

export const IconButtons = () => (
  <>
    <IconButton name="logo" />
    <IconButton name="close" />
  </>
);
