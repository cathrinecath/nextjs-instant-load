'use client'

import { useRouter } from 'next/navigation'
import { useNavigation } from '@/context/NavigationContext'
import { Button } from '@/components/atoms/Button'
import type { ButtonHTMLAttributes } from 'react'

interface NavButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  href: string
  variant?: 'primary' | 'secondary'
}

export function NavButton({ href, variant, children, ...props }: NavButtonProps) {
  const router = useRouter()
  const { startNavigation } = useNavigation()

  const handleClick = () => {
    startNavigation()
    router.push(href)
  }

  return (
    <Button variant={variant} onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
