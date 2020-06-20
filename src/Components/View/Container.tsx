import Emotoin from '@emotion/core';
import React from 'react';

import FlexView, { Props as FlexViewProps } from './FlexView';

export type Props = FlexViewProps;

const css: Emotoin.CSSObject = {
  // minHeight: '100vh'
};

export default (props: Props) => <FlexView css={css} fill {...props} />;
