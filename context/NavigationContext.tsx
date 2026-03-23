'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

interface NavigationContextType {
  isLoading: boolean
  startNavigation: () => void
  finishNavigation: () => void
}

const NavigationContext = createContext<NavigationContextType | null>(null)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)

  const startNavigation = useCallback(() => setIsLoading(true), [])
  const finishNavigation = useCallback(() => setIsLoading(false), [])

  return (
    <NavigationContext.Provider value={{ isLoading, startNavigation, finishNavigation }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const ctx = useContext(NavigationContext)
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider')
  return ctx
}
