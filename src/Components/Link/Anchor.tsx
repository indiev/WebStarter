import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export default ({ children, ...props }: Props) => <a {...props}>{children}</a>;
