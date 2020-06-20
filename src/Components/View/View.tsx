import * as Emotion from '@emotion/core';
import React, { forwardRef } from 'react';

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  component?: string;
};

export default forwardRef<HTMLDivElement, Props>(
  ({ component = 'div', ...props }: Props, ref) =>
    Emotion.jsx(component, { ref, ...props })
);
