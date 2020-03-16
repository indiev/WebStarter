import { Global } from '@emotion/core';
import { addDecorator, configure } from '@storybook/react';
import React from 'react';

import { rootStyles } from '../src/Styles/Theme';

configure(require.context('../src', true, /\.stories\.js$/), module);

addDecorator((story) => (
    <>
      <Global styles={rootStyles} />
      {story()}
    </>
  )
);
