import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';
import './styles/index.css';

// Mocking пока вырубаем, до выстраивания всей системы
// export async function enableMocking() {
//   const { worker } = await import('@/shared/openapi/mocks/browser');
//   return worker.start();
// }

// enableMocking().then(() => {
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
// });
