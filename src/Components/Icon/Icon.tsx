import Emotoin from '@emotion/react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import * as Icons from 'Assets/Images/Icons';
import { TextColors } from 'Styles/Theme';

export type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
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
    fill: color || TextColors.text
  };

  return (
    <span css={css} {...props}>
      <RenderIcon />
    </span>
  );
};
