import React, { useState, forwardRef } from 'react';
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

export default forwardRef<HTMLInputElement, Props>(
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
    ref
  ) => {
    const [value, setValue] = useState(propValue);
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

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return (
      <FlexView row={row} css={viewCSS} style={style}>
        {label && <span css={labelCSS}>{name}</span>}
        <Input
          type={type}
          css={inputCSS}
          value={value}
          innerRef={ref}
          onChange={onChange}
          onFocus={() => setIsFoucs(true)}
          onBlur={() => setIsFoucs(false)}
          {...props}
        />
      </FlexView>
    );
  }
);
