import React from 'react';

export type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export default ({ children, ...props }: Props) => <a {...props}>{children}</a>;
