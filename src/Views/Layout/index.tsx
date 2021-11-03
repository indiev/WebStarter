import CssBaseline from '@mui/material/CssBaseline';
import { DetailedHTMLProps, Fragment, HTMLAttributes } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { FlexView } from 'Components';
import { Props as FlexViewProps } from 'Components/View/FlexView';
import FooterRouter from 'Routes/Footer/FooterRouter';
import HeaderRouter from 'Routes/Header/HeaderRouter';
import MainRouter from 'Routes/Main/MainRouter';
import GlobalStyles from 'Styles/GlobalStyles';

export type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Header = (props: FlexViewProps) => (
  <FlexView component="header" {...props}>
    <HeaderRouter />
  </FlexView>
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
  <Fragment>
    <GlobalStyles />
    <CssBaseline />
    <Router>{children}</Router>
  </Fragment>
);
