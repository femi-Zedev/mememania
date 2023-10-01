"use client"; // This is a client component 👈🏽
import { MantineProvider, createEmotionCache } from '@mantine/core'
import './globals.css'
import { theme } from '@/theme';
import Navbar from '@/components/layout/Navbar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
      <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={myCache} theme={theme} >
        <body className={`h-screen  ${isNavStyled ? 'bg-white' : 'bg-[#f3f6f8]'}`} >
          <Navbar isNavBarStyled={isNavStyled} />
          <main className="px-4 lg:px-12 3xl:px-[10%] h-[calc(100vh-74px)] mt-20 w-full">
            {children}
          </main>
        </body>
      </MantineProvider>
    </html>
  )
}
