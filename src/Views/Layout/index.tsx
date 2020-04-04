import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import FooterRouter from 'Routes/Footer/FooterRouter';
import HeaderRouter from 'Routes/Header/HeaderRouter';
import MainRouter from 'Routes/Main/MainRouter';
import GlobalStyles from 'Styles/GlobalStyles';

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
    <GlobalStyles />
    <Router>{children}</Router>
  </>
);
