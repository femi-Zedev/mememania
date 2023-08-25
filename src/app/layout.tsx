"use client"; // This is a client component 👈🏽
import { MantineProvider, createEmotionCache } from '@mantine/core'
import './globals.css'
import { RecoilRoot } from 'recoil';
import { theme } from '@/theme';
import Navbar from '@/components/layout/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const myCache = createEmotionCache({
    key: 'mantine',
    prepend: false
  });


  return (
    <html lang="en">
      <RecoilRoot>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={myCache}
          theme={theme}
        >
          <body className="h-full min-h-screen xs:py-5 lg:p-5">
            <Navbar />
            <main className="px-4 pt-16 3xl:px-[10%] h-full w-full">
              {children}
            </main>
          </body>
        </MantineProvider>
      </RecoilRoot>
    </html>
  )
}
