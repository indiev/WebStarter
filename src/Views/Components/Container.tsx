import React from 'react';
import Div from './Div';

interface Props {
  style?: object;
  className?: string;
  children?: React.ReactNode;
}

const styles: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#282c34',
  color: 'white',
  fontSize: 'calc(10px + 2vmin)'
};

const Container: React.FC<Props> = ({ style, ...props }: Props) => (
  <Div style={{ ...styles, ...style }} {...props} />
);

export default Container;
