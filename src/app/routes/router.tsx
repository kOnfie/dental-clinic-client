import { createBrowserRouter } from 'react-router-dom';

import { Layout, Authentication, Home, AboutUs } from 'src/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
  {
    path: '/authentication',
    element: <Authentication />,
  },
]);
