'use client'
import { Suspense } from "react";
import { twMerge } from "tailwind-merge";

import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import Page from "@/shared/ui/page";
import "@/shared/css/index.css";
import localFont from 'next/font/local'
import { GeneralProviders } from "./(providers)";

const SegoeUI = localFont({ src: '../shared/font/SegoeSemibold.woff2' })

export default function RootLayout({
  children,
}: Readonly<{  children: React.ReactNode;
}>) {

	// const { theme } = useTheme();
	// const isActivePlayer = useSelector(getIsActivePlayer)


  return (
    <html lang="ru">
      <body>
          <div className={`fixed top-0 left-0 right-0 bottom-0 w-dvw h-vh 
            bg-black scheme-dark text-white
            font-main font-bold ${SegoeUI.className}`}
          >
			    <Suspense fallback="">
            <GeneralProviders>
              <div className={twMerge("flex overflow-x-auto h-full", 
                // (isActivePlayer) ? 'h-full pb-12': 'h-full'
              )}>
                <Sidebar />
                <main className="relative flex h-full w-full overflow-y-auto mx-1 py-2">
                  <Header />
                  <Page>
                    {children}
                  </Page>
                </main>
              </div>
            </GeneralProviders>

				    {/* {isActivePlayer && <Player />}	 */}
			    </Suspense>
          </div>
      </body>
    </html>
  );
}
