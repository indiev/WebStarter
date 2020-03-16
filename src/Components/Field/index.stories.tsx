import React from 'react';

import TextField from './TextField';

import { FlexView } from 'Components/View';

export default { title: 'Input' };

export const TextFields = () => (
  <FlexView>
    <TextField css={{ color: 'var(--dark)' }} placeholder="Input text" />
  </FlexView>
);
