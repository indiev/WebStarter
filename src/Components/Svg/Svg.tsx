import React from 'react';

export interface Props extends React.SVGProps<SVGSVGElement> {}

const DEAFAULT_VIEW_BOX_SIZE = 24;

export default ({ width, height, ...props }: Props) => (
  <svg
    viewBox={`0 0 ${width || DEAFAULT_VIEW_BOX_SIZE} ${height ||
      DEAFAULT_VIEW_BOX_SIZE}`}
    focusable="false"
    pointerEvents="none"
    style={{ width: 'auto', height: '100%' }}
    {...props}
  />
);
