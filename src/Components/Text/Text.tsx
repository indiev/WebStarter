import Emotoin from '@emotion/core';
import React from 'react';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  size?:
    | 'medium'
    | 'xx-small'
    | 'x-small'
    | 'small'
    | 'large'
    | 'x-large'
    | 'xx-large';
  weight?: 'thin' | 'regular' | 'bold' | 'dark';
  xxSmall?: boolean;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  xxLarge?: boolean;
  xxxLarge?: boolean;
  thin?: boolean;
  bold?: boolean;
  dark?: boolean;
};

const SizeStyle: { [key: string]: Emotoin.CSSObject } = {
  'xx-small': { fontSize: 'var(--font-size-xx-small)' },
  'x-small': { fontSize: 'var(--font-size-x-small)' },
  small: { fontSize: 'var(--font-size-small)' },
  medium: { fontSize: 'var(--font-size-medium)' },
  large: { fontSize: 'var(--font-size-large)' },
  'x-large': { fontSize: 'var(--font-size-x-large)' },
  'xx-large': { fontSize: 'var(--font-size-xx-large)' },
  'xxx-large': { fontSize: 'var(--font-size-xxx-large)' }
};

const WeightStyle: { [key: string]: Emotoin.CSSObject } = {
  thin: {
    fontWeight: 200
  },
  reqular: {
    fontWeight: 400
  },
  bold: {
    fontWeight: 700
  },
  dark: {
    fontWeight: 900
  }
};

export default ({
  size,
  weight,
  xxSmall,
  xSmall,
  small,
  large,
  xLarge,
  xxLarge,
  xxxLarge,
  thin,
  bold,
  dark,
  ...props
}: Props) => {
  const css = {
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
        (thin && 'thin') ||
        (bold && 'bold') ||
        (dark && 'dark') ||
        'regular'
    ]
  };

  return <span css={css} {...props} />;
};
