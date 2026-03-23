'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useNavigation } from '@/context/NavigationContext'

/**
 * Mounted once in the root layout.
 * - Finishes loading when the pathname changes (new page is ready).
 * - Starts loading on popstate so the browser back/forward button also
 *   triggers the skeleton before the next pathname update arrives.
 */
export function RouteChangeListener() {
  const pathname = usePathname()
  const { startNavigation, finishNavigation } = useNavigation()
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }
    finishNavigation()
  }, [pathname, finishNavigation])

  useEffect(() => {
    const onPopState = () => startNavigation()
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [startNavigation])

  return null
}
