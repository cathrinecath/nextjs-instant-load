'use client'

import type { ReactNode } from 'react'
import { useNavigation } from '@/context/NavigationContext'
import { SkeletonPage } from '@/components/molecules/SkeletonPage'

interface PageTemplateProps {
  children: ReactNode
}

/**
 * Wraps every page. Swaps children for the skeleton while a navigation
 * is in-flight; restores children the moment the new route is ready.
 */
export function PageTemplate({ children }: PageTemplateProps) {
  const { isLoading } = useNavigation()
  return isLoading ? <SkeletonPage /> : <>{children}</>
}
