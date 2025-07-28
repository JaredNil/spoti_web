import { createBrowserRouter } from 'react-router-dom';

import { App } from '../app';
import { ROUTES } from '@/shared/routes/routes';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import('@/pages/home/home.page'),
      },
      // {
      //   path: ROUTES.LOGIN,
      //   lazy: () => import('@/features/auth/login.page'),
      // },
      // {
      //   path: ROUTES.REGISTER,
      //   lazy: () => import('@/features/auth/register.page'),
      // },
    ],
  },
]);
