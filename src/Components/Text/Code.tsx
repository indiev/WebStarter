import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export default (props: Props) => <code {...props} />;
