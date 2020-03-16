import Emotoin from '@emotion/core';
import React from 'react';

export type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  fit?: boolean;
};

const css: Emotoin.CSSObject = {
  backgroundColor: 'unset',
  border: 'none',
  outline: 'none',
  padding: 0,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--text)',
  transition: 'filter 0.3s, background 0.3s',
  ':not(:disabled)': {
    cursor: 'pointer'
  },
  ':hover': {
    filter: 'brightness(85%)'
  },
  ':active': {
    filter: 'brightness(100%)'
  },
  ':disabled': {
    filter: 'opacity(50%)',
    pointerEvents: 'none'
  }
};

export default ({ type = 'button', fit, ...props }: Props) => (
  <button
    css={{ ...((fit && { width: 'fit-content' }) || {}), ...css }}
    type={type}
    {...props}
  />
);
