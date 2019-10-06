import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Paragraph: React.FC<Props> = (props: Props) => <p {...props} />;

export default Paragraph;
