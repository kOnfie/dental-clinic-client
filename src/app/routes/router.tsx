import { createBrowserRouter } from 'react-router-dom';

import { Layout, Authentication } from 'src/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [],
  },
  {
    path: '/authentication',
    element: <Authentication />,
  },
]);
