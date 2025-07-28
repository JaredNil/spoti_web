import { Outlet } from 'react-router-dom';

import { Providers } from './providers';

export default function App() {
  // const { toggleTheme } = useTheme();

  return (
    <Providers>
      {/* <Suspense fallback=""> */}
        <div
          // className={twMerge(
            // 'flex overflow-x-auto'
            // isActivePlayer ? 'h-full pb-12' : 'h-full'
          // )}
        >
          {/* <Sidebar /> */}

          <main className="relative flex h-full w-full overflow-y-auto py-2">
            {/* <Header /> */}
            <Outlet />
          </main>
        </div>
        {/* {isActivePlayer && <Player />} */}
      {/* </Suspense> */}
    </Providers>
  );
}
