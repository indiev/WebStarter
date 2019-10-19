import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

const Paragraph: React.FC<Props> = (props: Props) => <p {...props} />;

export default Paragraph;
