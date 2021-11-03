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

export const Vaccine = {
  path: '/vaccine',
  component: loadable(() => import('Views/Pages/Vaccine')),
  exact: true
};

export const Antibody = {
  path: '/antibody',
  component: loadable(() => import('Views/Pages/Antibody')),
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
