import React from 'react';
import FlexView, { Props as FlexViewProps } from './FlexView';

export interface Props extends FlexViewProps {}

const styles: React.CSSProperties = {
  minHeight: '100vh',
  fontSize: 'calc(10px + 2vmin)'
};

export default ({ style, ...props }: Props) => (
  <FlexView
    fill
    content="center"
    items="center"
    style={{ ...styles, ...style }}
    {...props}
  />
);
