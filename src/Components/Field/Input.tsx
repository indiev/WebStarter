import Emotion from '@emotion/react';
import { forwardRef, InputHTMLAttributes } from 'react';

import { FontSizes, TextColors } from 'Styles/Theme';

export type Props = InputHTMLAttributes<HTMLInputElement>;

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

export default forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input ref={ref} css={css} {...props} />
));
