'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

import Button from '@/components/button'
import type { ButtonProps } from '@/components/button'

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
