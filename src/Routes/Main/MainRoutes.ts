import loadable from '@loadable/component';

export const SiginUp = {
  path: '/signup',
  component: loadable(() => import('Views/Pages/SignUp')),
  exact: true
};

export const SiginIn = {
  path: '/signin',
  component: loadable(() => import('Views/Pages/SignIn')),
  exact: true
};

export const Main = {
  path: '/',
  component: loadable(() => import('Views/Pages/Main')),
  exact: true
};

export const NoMatch = {
  component: loadable(() => import('Views/Pages/NoMatch'))
};
