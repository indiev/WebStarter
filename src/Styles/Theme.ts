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
  GrayLight: Grays.G100,
  Gray: Grays.G600,
  GrayDark: Grays.G800,
  Dark: Grays.G900,
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

export const Colors = {
  ...BasicColors,
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
  xxSmall: '0.6rem',
  xSmall: '0.75rem',
  small: '0.85rem',
  medium: '1rem',
  large: '1.25rem',
  xLarge: '1.5rem',
  xxLarge: '1.75rem',
  xxxLarge: '2rem'
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
  '--gray': Colors.Gray,
  '--gray-dark': Colors.GrayDark,
  '--primary': Colors.Primary,
  '--secondary': Colors.Secondary,
  '--success': Colors.Success,
  '--info': Colors.Info,
  '--warning': Colors.Warning,
  '--danger': Colors.Danger,
  '--light': Colors.Light,
  '--dark': Colors.Dark,
  '--text': Colors.White,
  '--text-light': Colors.Gray,
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
  '--font-family-monospace:': `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
};

export const rootStyles: Emotion.CSSObject = {
  ':root': cssVars
};
