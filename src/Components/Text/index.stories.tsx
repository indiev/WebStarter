import React from 'react';

import Text from './Text';

import { FlexView } from 'Components/View';

export default {
  title: 'Text'
};

export const Texts = () => (
  <FlexView>
    <FlexView>
      <Text xxxLarge>Text - XXX-Large</Text>
      <Text xxLarge>Text - XX-Large</Text>
      <Text xLarge>Text - X-Large</Text>
      <Text large>Text - Large</Text>
      <Text>Text - Medium</Text>
      <Text small>Text - Small</Text>
      <Text xSmall>Text - X-Small</Text>
      <Text xxSmall>Text - XX-Small</Text>
    </FlexView>
    <FlexView
      css={{ marginTop: 15, 'span:not(:first-child)': { paddingLeft: 10 } }}
      row
    >
      <Text thin xLarge>
        Thin
      </Text>
      <Text xLarge>Regular</Text>
      <Text bold xLarge>
        Bold
      </Text>
      <Text dark xLarge>
        Dark
      </Text>
    </FlexView>
  </FlexView>
);
