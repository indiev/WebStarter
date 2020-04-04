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
      <Text css={{ fontWeight: 100 }} xLarge>
        Thin
      </Text>
      <Text css={{ fontWeight: 200 }} xLarge>
        Extra Light
      </Text>
      <Text light xLarge>
        Light
      </Text>
      <Text xLarge>Regular</Text>
      <Text medium xLarge>
        Medium
      </Text>
      <Text css={{ fontWeight: 600 }} xLarge>
        Semi Bold
      </Text>
      <Text bold xLarge>
        Bold
      </Text>
      <Text css={{ fontWeight: 800 }} xLarge>
        Extra Bold
      </Text>
      <Text black xLarge>
        Black
      </Text>
    </FlexView>
    <FlexView
      css={{ marginTop: 15, 'span:not(:first-child)': { paddingTop: 10 } }}
    >
      <Text monospace xLarge>
        Regular Monospace
      </Text>
      <Text bold monospace xLarge>
        Bold Monospace
      </Text>
    </FlexView>
  </FlexView>
);
