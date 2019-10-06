import React from 'react';

interface Props {
  className?: string;
  href?: string;
  target?: 'self' | '_blank' | '_parent' | '_self' | '_top';
  rel?: string;
  children?: React.ReactNode;
}

const Anchor: React.FC<Props> = ({ children, ...props }: Props) => (
  <a {...props}>{children}</a>
);

export default Anchor;
