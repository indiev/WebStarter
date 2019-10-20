import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export default (props: Props) => <p {...props} />;
