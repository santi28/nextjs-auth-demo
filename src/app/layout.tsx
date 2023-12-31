import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SessionProvider from '@/components/SessionProvider'
import AppBar from '@/components/AppBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col'>
        <SessionProvider>
          <AppBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
