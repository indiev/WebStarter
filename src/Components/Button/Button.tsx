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
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--text)',
  transition: 'filter 0.3s, background 0.3s',
  ':hover': {
    filter: 'brightness(85%)'
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
