import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { Providers } from './providers';

export function App() {
  // const { toggleTheme } = useTheme();

  return (
    <Providers>
      <Suspense fallback="">
        <div
          className={twMerge(
            'flex overflow-x-auto'
            // isActivePlayer ? 'h-full pb-12' : 'h-full'
          )}
        >
          {/* <Sidebar /> */}

          <main className="relative flex h-full w-full overflow-y-auto py-2">
            {/* <Header /> */}
            <Outlet />
          </main>
        </div>
        {/* {isActivePlayer && <Player />} */}
      </Suspense>
    </Providers>
  );
}
