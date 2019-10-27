import React from 'react';
import { Global } from '@emotion/core';
import { BrowserRouter as Router } from 'react-router-dom';

import { rootStyles } from 'Styles/Theme';
import HeaderRouter from 'Routes/Header/HeaderRouter';
import MainRouter from 'Routes/Main/MainRouter';
import FooterRouter from 'Routes/Footer/FooterRouter';

export type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export const Header = (props: Props) => (
  <header {...props}>
    <HeaderRouter />
  </header>
);
export const Main = (props: Props) => (
  <main {...props}>
    <MainRouter />
  </main>
);
export const Footer = (props: Props) => (
  <footer {...props}>
    <FooterRouter />
  </footer>
);
export const Root = ({ children }: Props) => (
  <>
    <Global styles={rootStyles} />
    <Router>{children}</Router>
  </>
);
