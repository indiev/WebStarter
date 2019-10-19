import React from 'react';

export interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

const Anchor: React.FC<Props> = ({ children, ...props }: Props) => (
  <a {...props}>{children}</a>
);

export default Anchor;
