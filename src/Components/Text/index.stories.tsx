import React from 'react';

import Text from './Text';

import { FlexView } from 'Components/View';

export default {
  title: 'Text'
};

export const Texts = () => (
  <FlexView>
    <Text xxLarge>XX-Large</Text>
    <Text xLarge>X-Large</Text>
    <Text>Medium</Text>
    <Text xSmall>X-Small</Text>
    <Text xxSmall>XX-Small</Text>
  </FlexView>
);
