import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

export type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export default ({ children, ...props }: Props) => <a {...props}>{children}</a>;
