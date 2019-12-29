import React, { useState } from 'react';
import Emotion from '@emotion/core';
import FlexView from 'Components/View/FlexView';
import Input from './Input';

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
      <FlexView row={row} css={viewCSS} style={style}>
        {label && name && (
          <label htmlFor={name} css={labelCSS}>
            {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
          </label>
        )}
        <Input
          type={type}
          css={inputCSS}
          name={name}
          onFocus={() => setIsFoucs(true)}
          onBlur={() => setIsFoucs(false)}
          ref={ref}
          {...props}
        />
      </FlexView>
    );
  }
);
