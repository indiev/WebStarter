import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export default (props: Props) => <div {...props} />;
