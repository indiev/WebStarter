import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Div: React.FC<Props> = (props: Props) => <div {...props} />;

export default Div;
