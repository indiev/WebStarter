import { CSSObject } from '@emotion/react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;
export type SvgProps = Props;

const DEFAULT_VIEW_BOX_SIZE = 24;

const css: CSSObject = {
  width: 'auto',
  height: '100%'
};

export default ({ width, height, ...props }: Props) => (
  <svg
    css={css}
    focusable="false"
    pointerEvents="none"
    viewBox={`0 0 ${width || DEFAULT_VIEW_BOX_SIZE} ${
      height || DEFAULT_VIEW_BOX_SIZE
    }`}
    {...props}
  />
);
