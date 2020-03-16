import Emotion from '@emotion/core';
import React, { useState } from 'react';

import Input from './Input';

import FlexView from 'Components/View/FlexView';

export type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  row?: boolean;
  label?: boolean;
};

export default React.forwardRef(
  (
    {
      type = 'text',
      name,
      style,
      row,
      label,
      value: propValue,
      ...props
    }: Props,
    ref: any
  ) => {
    const [isFocus, setIsFoucs] = useState(false);

    const viewCSS: Emotion.CSSObject = {
      borderBottom: `1px solid ${(isFocus && 'var(--gray)') ||
        'var(--gray-dark)'}`,
      ':focus': {
        borderBottom: 'var(--gray)'
      },
      transition: 'border 0.3s'
    };

    const labelCSS: Emotion.CSSObject = {
      fontWeight: 'bold',
      ...((row && { marginRight: '0.35vw' }) || { marginBottom: '0.35vw' })
    };

    const inputCSS: Emotion.CSSObject = {
      padding: '0.5vw 0'
      // borderRadius: '0.3vw'
    };

    return (
      <FlexView css={viewCSS} row={row} style={style}>
        {label && name && (
          <label css={labelCSS} htmlFor={name}>
            {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
          </label>
        )}
        <Input
          ref={ref}
          css={inputCSS}
          name={name}
          type={type}
          onBlur={() => setIsFoucs(false)}
          onFocus={() => setIsFoucs(true)}
          {...props}
        />
      </FlexView>
    );
  }
);
