'use client'

import { useFormStatus } from 'react-dom'

import Button from '@/ui/button'
import type { ButtonProps } from '@/ui/button'

type Props = Omit<ButtonProps, 'type' | 'loading'>

export type SubmitButtonProps = Props

export default function SubmitButton({ children, ...props }: Props) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" loading={pending} {...props}>
      {children}
    </Button>
  )
}
