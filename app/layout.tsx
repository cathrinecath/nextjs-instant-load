import type { Metadata } from 'next'
import './globals.css'
import { NavigationProvider } from '@/context/NavigationContext'
import { RouteChangeListener } from '@/components/organisms/RouteChangeListener'

export const metadata: Metadata = {
  title: 'Next.js Instant Load',
  description: 'Instant skeleton feedback on every route change',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavigationProvider>
          <RouteChangeListener />
          {children}
        </NavigationProvider>
      </body>
    </html>
  )
}
