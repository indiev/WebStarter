import React from 'react';
import FlexView, { Props as FlexViewProps } from './FlexView';

export interface Props extends FlexViewProps {}

const styles: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#282c34',
  color: 'white',
  fontSize: 'calc(10px + 2vmin)'
};

const Container: React.FC<Props> = ({ style, ...props }: Props) => (
  <FlexView
    fill
    content="center"
    items="center"
    style={{ ...styles, ...style }}
    {...props}
  />
);

export default Container;
