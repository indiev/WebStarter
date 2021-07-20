import loadable from '@loadable/component';

export const PostWrite = {
  path: '/posts/write',
  component: loadable(() => import('Views/Pages/Posts/PostWrite')),
  exact: true
};

export const PostList = {
  path: '/posts',
  component: loadable(() => import('Views/Pages/Posts/PostList')),
  exact: true
};

export const PostRead = {
  path: '/posts/:postId',
  component: loadable(() => import('Views/Pages/Posts/PostRead')),
  exact: true
};

// export const SignUp = {
//   path: '/signup',
//   component: loadable(() => import('Views/Pages/SignUp')),
//   exact: true
// };

// export const ConfirmSignUp = {
//   path: '/signup/confirm',
//   component: loadable(() => import('Views/Pages/ConfirmSignUp')),
//   exact: true
// };

// export const SignIn = {
//   path: '/signin',
//   component: loadable(() => import('Views/Pages/SignIn')),
//   exact: true
// };

export const List = {
  path: '/list',
  component: loadable(() => import('Views/Pages/List')),
  exact: true
};

export const Main = {
  // path: ['/', '/create', '/login'],
  path: '/',
  component: loadable(() => import('Views/Pages/Main')),
  exact: true
};

export const NoMatch = {
  path: '/',
  component: loadable(() => import('Views/Pages/NoMatch')),
  exact: false
};
