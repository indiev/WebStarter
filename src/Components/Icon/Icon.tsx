import Emotoin from '@emotion/core';
import React from 'react';

import * as Icons from 'Assets/Images/Icons';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  name: string;
  color?: string;
  size?: number;
};

const defaultCSS: Emotoin.CSSObject = {
  display: 'inline-flex'
};

export default ({ name, color, size, ...props }: Props) => {
  const RenderIcon = Icons[name as keyof typeof Icons];
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
