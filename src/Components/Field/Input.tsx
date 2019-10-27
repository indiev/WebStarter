import React from 'react';
import Emotion from '@emotion/core';

export type RefType =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

export type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  innerRef: RefType;
};

const css: Emotion.CSSObject = {
  border: 'none',
  outline: 'none',
  color: 'var(--text)',
  background: 'none',
  width: '100%',
  fontSize: 'var(--font-size-large)'
};
export default (props: Props) => {
  const { innerRef } = props;

  return <input css={css} ref={innerRef} {...props} />;
};
