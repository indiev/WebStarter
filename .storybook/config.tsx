import { addDecorator, configure } from '@storybook/react';
import React from 'react';

import GlobalStyles from '../src/Styles/GlobalStyles';

configure(require.context('../src', true, /\.stories\.(js|tsx)$/), module);

addDecorator((story) => (
    <>
      <GlobalStyles />
      {story()}
    </>
  )
);
