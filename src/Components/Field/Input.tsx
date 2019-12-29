import React from 'react';
import Emotion from '@emotion/core';

export type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const css: Emotion.CSSObject = {
  border: 'none',
  outline: 'none',
  color: 'var(--text)',
  background: 'none',
  width: '100%',
  fontSize: 'var(--font-size-large)'
};

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => (
    <input css={css} ref={ref} {...props} />
  )
);
