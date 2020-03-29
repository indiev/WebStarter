import * as Emotion from '@emotion/core';
import React, { forwardRef } from 'react';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  as?: string;
};

export default forwardRef<HTMLDivElement, Props>(
  ({ as = 'div', ...props }: Props, ref) => Emotion.jsx(as, { ref, ...props })
);
