import React from 'react';

import Text from './Text';

import { FlexView } from 'Components/View';

export default {
  title: 'Text'
};

export const Texts = () => (
  <FlexView>
    <FlexView>
      <Text xxxLarge>Text - XXXLarge</Text>
      <Text xxLarge>Text - XXLarge</Text>
      <Text xLarge>Text - XLarge</Text>
      <Text large>Text - Large</Text>
      <Text>Text - Medium</Text>
      <Text small>Text - Small</Text>
      <Text xSmall>Text - XSmall</Text>
      <Text xxSmall>Text - XXSmall</Text>
    </FlexView>
    <FlexView
      css={{ marginTop: 15, 'span:not(:first-child)': { paddingLeft: 10 } }}
      row
    >
      <Text light xLarge>
        Light
      </Text>
      <Text xLarge>Regular</Text>
      <Text medium xLarge>
        Medium
      </Text>
      <Text bold xLarge>
        Bold
      </Text>
      <Text black xLarge>
        Black
      </Text>
    </FlexView>
    <FlexView
      css={{ marginTop: 15, 'span:not(:first-child)': { paddingTop: 10 } }}
    >
      <Text monospace xLarge>
        Regular
      </Text>
      <Text bold monospace xLarge>
        Bold
      </Text>
    </FlexView>
  </FlexView>
);
