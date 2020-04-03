import { CSSObject } from '@emotion/core';
import React from 'react';

import { View } from 'Components/View';

type Props = React.HTMLAttributes<SVGElement> & {
  width?: number | string;
  height?: number | string;
  boxWidth?: number;
  boxHeight?: number;
  color?: string;
  children: React.ReactNode;
  viewCss?: CSSObject;
  onClick?: () => void;
};

export const Svg = ({
  width,
  height,
  boxWidth = 24,
  boxHeight = 24,
  color = 'white',
  children,
  onClick,
  viewCss,
  ...props
}: Props) => {
  const viewWidth = width || (height ? 'auto' : boxWidth);
  const viewHeight = height || (width ? 'auto' : boxHeight);

  const styles = {
    display: 'block',
    width: viewWidth,
    height: viewHeight
  };

  return (
    <View as="span" css={viewCss} style={styles} onClick={onClick}>
      <svg
        css={{
          display: 'block',
          width: 'auto',
          height: '100%',
          fill: color
        }}
        pointerEvents="none"
        viewBox={`0 0 ${boxWidth} ${boxHeight}`}
        {...props}
      >
        {children}
      </svg>
    </View>
  );
};
