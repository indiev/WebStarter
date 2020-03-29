import Emotion from '@emotion/core';
import React from 'react';

export type Props = React.InputHTMLAttributes<HTMLInputElement>;

const css: Emotion.CSSObject = {
  border: 'none',
  outline: 'none',
  background: 'none',
  width: '100%',
  color: 'currentColor',
  fontSize: 'var(--font-size-medium)',
  '::placeholder': {
    color: 'var(--text-light)'
  },
  boxSizing: 'content-box',
  WebkitTapHighlightColor: 'transparent'
};

export default React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input ref={ref} css={css} {...props} />
));
