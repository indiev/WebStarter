import React from 'react';
import { Global } from '@emotion/core';
import { rootStyles } from 'Styles/Theme';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const Header = (props: Props) => <header {...props} />;
export const Main = (props: Props) => <main {...props} />;
export const Footer = (props: Props) => <footer {...props} />;
export const Root = ({ children }: Props) => (
  <>
    <Global styles={rootStyles} />
    {children}
  </>
);
