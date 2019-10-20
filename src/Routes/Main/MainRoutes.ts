import loadable from '@loadable/component';

export const Main = {
  path: '/',
  component: loadable(() => import('Views/Pages/Main')),
  exact: true
};

export const NoMatch = {
  component: loadable(() => import('Views/Pages/NoMatch'))
};
