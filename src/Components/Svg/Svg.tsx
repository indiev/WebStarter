import Emotoin from '@emotion/core';
import React from 'react';

export type Props = React.SVGProps<SVGSVGElement>;

const DEAFAULT_VIEW_BOX_SIZE = 24;

const css: Emotoin.CSSObject = {
  width: 'auto',
  height: '100%'
};

export default ({ width, height, ...props }: Props) => (
  <svg
    css={css}
    focusable="false"
    pointerEvents="none"
    viewBox={`0 0 ${width || DEAFAULT_VIEW_BOX_SIZE} ${height ||
      DEAFAULT_VIEW_BOX_SIZE}`}
    {...props}
  />
);
