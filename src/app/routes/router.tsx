import { createBrowserRouter } from 'react-router-dom';

import { Layout, Authentication, Login } from 'src/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/authentication',
    element: <Authentication />,
  },
  {
    path: '/authentication/log-in',
    element: <Login />,
  },
]);
