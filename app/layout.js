import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Mean Girls Booth',
  description: 'Mean Girl Photo Booth',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics/>
      </body>
    </html>
  )
}
