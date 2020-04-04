import Emotion from '@emotion/core';
import React from 'react';

import { FontSizes, TextColors } from 'Styles/Theme';

export type Props = React.InputHTMLAttributes<HTMLInputElement>;

const css: Emotion.CSSObject = {
  border: 'none',
  outline: 'none',
  background: 'none',
  width: '100%',
  color: 'currentColor',
  fontSize: FontSizes.medium,
  '::placeholder': {
    color: TextColors.textLight
  },
  boxSizing: 'content-box',
  WebkitTapHighlightColor: 'transparent',
  minWidth: 0,
  '&:-webkit-autofill': {
    WebkitTextFillColor: TextColors.text,
    transition: 'background-color 5000s ease-in-out 0s'
  },
  '&::-webkit-search-decoration': {
    // Remove the padding when type=search.
    appearance: 'none'
  },
  ':focus': {
    outline: 0
  }
};

export default React.forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input ref={ref} css={css} {...props} />
));
