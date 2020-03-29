import * as Emotion from '@emotion/core';
import React from 'react';

export type Props = (
  | React.HTMLAttributes<HTMLSpanElement>
  | React.LabelHTMLAttributes<HTMLLabelElement>
) & {
  as?: string;
  size?:
    | 'medium'
    | 'xx-small'
    | 'x-small'
    | 'small'
    | 'large'
    | 'x-large'
    | 'xx-large';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  xxSmall?: boolean;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  xxLarge?: boolean;
  xxxLarge?: boolean;
  light?: boolean;
  medium?: boolean;
  bold?: boolean;
  black?: boolean;
  monospace?: boolean;
};

const SizeStyle: { [key: string]: Emotion.CSSObject } = {
  'xx-small': { fontSize: 'var(--font-size-xx-small)' },
  'x-small': { fontSize: 'var(--font-size-x-small)' },
  small: { fontSize: 'var(--font-size-small)' },
  medium: { fontSize: 'var(--font-size-medium)' },
  large: { fontSize: 'var(--font-size-large)' },
  'x-large': { fontSize: 'var(--font-size-x-large)' },
  'xx-large': { fontSize: 'var(--font-size-xx-large)' },
  'xxx-large': { fontSize: 'var(--font-size-xxx-large)' }
};

// light, regular, bold
const WeightStyle: { [key: string]: Emotion.CSSObject } = {
  thin: {
    fontWeight: 100
  },
  extraLight: {
    fontWeight: 200
  },
  light: {
    fontWeight: 300
  },
  regular: {
    fontWeight: 400
  },
  medium: {
    fontWeight: 500
  },
  semiBold: {
    fontWeight: 600
  },
  bold: {
    fontWeight: 700
  },
  extraBold: {
    fontWeight: 800
  },
  black: {
    fontWeight: 900
  }
};

export default ({
  as = 'span',
  size,
  weight,
  xxSmall,
  xSmall,
  small,
  large,
  xLarge,
  xxLarge,
  xxxLarge,
  light,
  medium,
  bold,
  black,
  monospace,
  ...props
}: Props) => {
  const css: Emotion.CSSObject = {
    color: 'var(--text)',
    ...SizeStyle[
      size ||
        (xxSmall && 'xx-small') ||
        (xSmall && 'x-small') ||
        (small && 'small') ||
        (large && 'large') ||
        (xLarge && 'x-large') ||
        (xxLarge && 'xx-large') ||
        (xxxLarge && 'xxx-large') ||
        'medium'
    ],
    ...WeightStyle[
      weight ||
        (light && 'light') ||
        (medium && 'medium') ||
        (bold && 'bold') ||
        (black && 'black') ||
        'regular'
    ],
    ...(monospace && { fontFamily: 'var(--font-family-monospace)' })
  };

  return Emotion.jsx(as, { css, ...props });
};
