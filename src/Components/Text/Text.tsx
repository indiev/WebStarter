import * as Emotion from '@emotion/react';
import { HTMLAttributes, LabelHTMLAttributes } from 'react';

import { FontSizes, TextColors } from 'Styles/Theme';

export type Props = (
  | HTMLAttributes<HTMLSpanElement>
  | LabelHTMLAttributes<HTMLLabelElement>
) & {
  component?: string;
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
  semiBold?: boolean;
  bold?: boolean;
  black?: boolean;
  monospace?: boolean;
  color?: string;
};

const SizeStyle: { [key: string]: Emotion.CSSObject } = {
  'xx-small': { fontSize: FontSizes.xxSmall },
  'x-small': { fontSize: FontSizes.xSmall },
  small: { fontSize: FontSizes.small },
  medium: { fontSize: FontSizes.medium },
  large: { fontSize: FontSizes.large },
  'x-large': { fontSize: FontSizes.xLarge },
  'xx-large': { fontSize: FontSizes.xxLarge },
  'xxx-large': { fontSize: FontSizes.xxxLarge }
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
  component = 'span',
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
  semiBold,
  bold,
  black,
  monospace,
  color,
  ...props
}: Props) => {
  const css: Emotion.CSSObject = {
    color: color || TextColors.text,
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
        (semiBold && 'semiBold') ||
        (bold && 'bold') ||
        (black && 'black') ||
        'regular'
    ],
    ...(monospace && { fontFamily: 'var(--font-family-monospace)' })
  };

  return Emotion.jsx(component, { css, ...props });
};
