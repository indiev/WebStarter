import API from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Amplify from 'aws-amplify';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import awsconfig from 'aws-exports';
import { AuthProvider } from 'Context/AuthContext';
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

Amplify.configure(awsconfig);
// API.configure(awsconfig);
// PubSub.configure(awsconfig);

// const httpLink = createHttpLink({ uri: 'http://localhost:4000' });

// const AUTH_TOKEN = 'auth-token';

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem(AUTH_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   };
// });

// const wsLink = new WebSocketLink({
//   uri: 'ws://localhost:4000',
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken: localStorage.getItem(AUTH_TOKEN)
//     }
//   }
// });

// const link = split(
//   ({ query }) => {
//     const mainDefinition = getMainDefinition(query);
//     return (
//       mainDefinition.kind === 'OperationDefinition' &&
//       mainDefinition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   authLink.concat(httpLink)
// );

// const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache()
// });

export const Root = ({ children }: Props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
  );

  return (
    <>
      <GlobalStyles />
      <Router>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            {/* <ApolloProvider client={client}>{children}</ApolloProvider> */}
            {children}
          </AuthProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};
