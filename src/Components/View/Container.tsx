import React from 'react';
import FlexView, { Props as FlexViewProps } from './FlexView';

export type Props = FlexViewProps;

const styles: React.CSSProperties = {
  minHeight: '100vh'
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
