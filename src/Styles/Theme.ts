import Emotion from '@emotion/core';

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
  White: '#fff',
  Black: '#000',
  GrayLight: Grays.G200,
  Gray: Grays.G500,
  GrayDark: Grays.G800,
  Dark: '#121212',
  Blue: '#007bff',
  Indigo: '#6610f2',
  Purple: '#6f42c1',
  Pink: '#e83e8c',
  Red: '#dc3545',
  Orange: '#fd7e14',
  Yellow: '#ffc107',
  Green: '#28a745',
  Teal: '#20c997',
  Cyan: '#17a2b8'
};

const DarkThemeColors = {
  Red: '#f44336'
};

export const Colors = {
  ...BasicColors,
  ...DarkThemeColors,
  Primary: BasicColors.Blue,
  Secondary: BasicColors.Gray,
  Success: BasicColors.Green,
  Danger: BasicColors.Red,
  Warning: BasicColors.Yellow,
  Info: BasicColors.Cyan,
  Light: BasicColors.GrayLight,
  Dark: BasicColors.Dark
};

export const FontSizes = {
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

export const Sizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const cssVars: Emotion.CSSObject = {
  '--blue': Colors.Blue,
  '--indigo': Colors.Indigo,
  '--purple': Colors.Purple,
  '--pink': Colors.Pink,
  '--red': Colors.Red,
  '--orange': Colors.Orange,
  '--yellow': Colors.Yellow,
  '--green': Colors.Green,
  '--teal': Colors.Teal,
  '--cyan': Colors.Cyan,
  '--white': Colors.White,
  '--gray-light': Colors.GrayLight,
  '--gray': Colors.Gray,
  '--gray-dark': Colors.GrayDark,
  '--black': Colors.Black,
  '--primary': Colors.Primary,
  '--secondary': Colors.Secondary,
  '--success': Colors.Success,
  '--info': Colors.Info,
  '--warning': Colors.Warning,
  '--danger': Colors.Danger,
  '--light': Colors.Light,
  '--dark': Colors.Dark,
  '--text': Colors.White,
  '--text-light': Colors.GrayLight,
  '--text-dark': Colors.GrayDark,
  '--fill': Colors.White,
  '--breakpoint-xs': `${Sizes.xs}px`,
  '--breakpoint-sm': `${Sizes.sm}px`,
  '--breakpoint-md': `${Sizes.md}px`,
  '--breakpoint-lg': `${Sizes.lg}px`,
  '--breakpoint-xl': `${Sizes.xl}px`,
  '--font-size-xx-small': FontSizes.xxSmall,
  '--font-size-x-small': FontSizes.xSmall,
  '--font-size-small': FontSizes.small,
  '--font-size-medium': FontSizes.medium,
  '--font-size-large': FontSizes.large,
  '--font-size-x-large': FontSizes.xLarge,
  '--font-size-xx-large': FontSizes.xxLarge,
  '--font-size-xxx-large': FontSizes.xxxLarge,
  '--font-default-size': 'calc(10px + 0.3vw)',
  '--font-family-sans-serif': `Noto Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  '--font-family-monospace': `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
};

const html: Emotion.CSSObject = {
  fontFamily: 'var(--font-family-sans-serif)',
  fontSize: 'var(--font-default-size)',
  WebkitFontSmoothing: 'antialiased', // Antialiasing.
  MozOsxFontSmoothing: 'grayscale', // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box',
  backgroundColor: 'var(--dark)'
};

const body: Emotion.CSSObject = {
  margin: 0, // Remove the margin in all browsers.
  color: 'var(--text)',
  fill: 'var(--fill)',
  // Add support for document.body.requestFullScreen().
  // Other elements, if background transparent, are not supported.
  '&::backdrop': {
    backgroundColor: 'var(--gray-dark)'
  },
  '@media print': {
    backgroundColor: 'var(--white)'
  }
};

const etc: Emotion.CSSObject = {
  a: {
    textDecoration: 'none',
    color: 'unset'
  },
  'strong, b': {
    fontWeight: 700
  }
};

const global: Emotion.CSSObject = {
  html,
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  body,
  ...etc
};

export const rootStyles: Emotion.CSSObject = {
  ':root': cssVars,
  ...global
};
