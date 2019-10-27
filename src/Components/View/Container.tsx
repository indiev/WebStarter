import React from 'react';
import Emotoin from '@emotion/core';
import FlexView, { Props as FlexViewProps } from './FlexView';

export type Props = FlexViewProps;

const css: Emotoin.CSSObject = {
  minHeight: '100vh'
};

export default (props: Props) => (
  <FlexView fill content="center" items="center" css={css} {...props} />
);
