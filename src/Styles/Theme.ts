import { CSSObject } from '@emotion/react';

import { toGetVariables, toVariables } from 'Utils/styles';

const Grays = {
  G100: '#f8f9fa',
  G200: '#e9ecef',
  G300: '#dee2e6',
  G400: '#ced4da',
  G500: '#adb5bd',
  G600: '#6c757d',
  G700: '#495057',
  G800: '#343a40',
  G900: '#212529'
};

const BasicColors = {
  white: '#fff',
  black: '#000',
  grayLight: Grays.G200,
  gray: Grays.G500,
  grayDark: Grays.G800,
  dark: '#121212',
  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8'
};

const DarkThemeColors = {
  Red: '#f44336'
};

const StyleColors = {
  ...BasicColors,
  ...DarkThemeColors,
  primary: BasicColors.blue,
  secondary: BasicColors.gray,
  success: BasicColors.green,
  danger: BasicColors.red,
  warning: BasicColors.yellow,
  info: BasicColors.cyan,
  light: BasicColors.grayLight,
  dark: BasicColors.dark
};

const StyleFontSizes = {
  xxSmall: '0.625rem', // 10pt
  xSmall: '0.75rem', // 12pt
  small: '0.875rem', // 14pt
  medium: '1rem', // 16pt
  large: '1.25rem', // 20pt
  xLarge: '1.5rem', // 24pt
  // xxLarge: '1.75rem', // 28pt
  // xxxLarge: '2rem' // 32pt
  xxLarge: '2.125rem', //  34pt
  xxxLarge: '3rem', // 48pt
  xxxxLarge: '3.75rem', // 60pt
  xxxxxLarge: '6rem' // 96pt
};

export const StyleSizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const Colors = toGetVariables(StyleColors);
export const Sizes = toGetVariables(StyleSizes, 'breakpoint');
export const FontSizes = toGetVariables(StyleFontSizes, 'font-size');

const StyleTextColors = {
  text: Colors.dark,
  textLight: Colors.grayLight,
  textDark: Colors.grayDark,
  fill: Colors.white
};

export const TextColors = toGetVariables(StyleTextColors);

const styleVariables: CSSObject = {
  ...toVariables(StyleColors),
  ...toVariables(StyleTextColors),
  ...toVariables(StyleSizes, 'breakpoint', 'px'),
  ...toVariables(StyleFontSizes, 'font-size'),
  '--font-default-size': FontSizes.medium,
  '--font-family-sans-serif': `Noto Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  '--font-family-monospace': `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
};

const html: CSSObject = {
  fontFamily: 'var(--font-family-sans-serif)',
  fontSize: 'var(--font-default-size)',
  fontWeight: 'normal',
  WebkitFontSmoothing: 'antialiased', // Antialiasing.
  MozOsxFontSmoothing: 'grayscale', // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box',
  backgroundColor: Colors.white
};

const body: CSSObject = {
  margin: 0, // Remove the margin in all browsers.
  color: TextColors.text,
  fill: TextColors.fill,
  // Add support for document.body.requestFullScreen().
  // Other elements, if background transparent, are not supported.
  '&::backdrop': {
    backgroundColor: Colors.grayDark
  },
  '@media print': {
    backgroundColor: Colors.white
  }
};

const etc: CSSObject = {
  a: {
    textDecoration: 'none',
    color: 'unset'
  },
  'strong, b': {
    fontWeight: 700
  }
};

const global: CSSObject = {
  html,
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  body,
  ...etc
};

export const rootStyles: CSSObject = {
  ':root': styleVariables,
  ...global
};
