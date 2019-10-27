import React from 'react';
import Emotoin from '@emotion/core';
import * as Icons from 'Assets/Images/Icons';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  name: string;
  color?: string;
  size?: number;
};

const IconMap: { [key: string]: React.FC } = {
  ...Icons
};

const defaultCSS: Emotoin.CSSObject = {
  display: 'inline-flex'
};

export default ({ name, color, size, ...props }: Props) => {
  const RenderIcon = IconMap[name];
  const css: Emotoin.CSSObject = {
    ...defaultCSS,
    height: size || 24,
    ...(color && { fill: color })
  };

  return (
    <span css={css} {...props}>
      <RenderIcon />
    </span>
  );
};
