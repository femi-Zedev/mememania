"use client"; // This is a client component 👈🏽
import { MantineProvider, createEmotionCache } from '@mantine/core'
import './globals.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { theme } from '@/theme';
import Navbar from '@/components/layout/Navbar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { currentUserAtom } from '@/recoil/atoms';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathName = usePathname()
  const [isNavStyled, setIsNavStyled] = useState(true)

  

  const myCache = createEmotionCache({
    key: 'mantine',
    prepend: false
  });

  useEffect(() => {
    if (pathName.includes("/signup") || pathName.includes("/signin")) {
      setIsNavStyled(false)
    } else {
      setIsNavStyled(true)
    }
  }, [pathName])




  return (
    <html lang="en">
      <RecoilRoot>
        <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={myCache} theme={theme} >
          <body className={`h-screen  ${isNavStyled ? 'bg-white' : 'bg-[#f3f6f8]' }`} >
            <Navbar isNavBarStyled={isNavStyled} />
            <main className="px-4 3xl:px-[10%] h-[calc(100vh-74px)] mt-[74px] w-full">
              {children}
            </main>
          </body>
        </MantineProvider>
      </RecoilRoot>
    </html>
  )
}
