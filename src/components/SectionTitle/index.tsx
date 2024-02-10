'use client'

import { useVisible } from '@/hooks/useVisible'
import { useRef } from 'react'

type Props = {
  children: string | React.ReactNode
  animate?: string // 动画名称
}

export const SectionTitle: React.FC<Props> = (props) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const { isVisible } = useVisible(ref)
  const animateName = ' ' + (props.animate || 'animate__bounce')

  return (
    <h1 ref={ref} className={`animate__animated${isVisible ? animateName : ''}`}>
      {props.children}
    </h1>
  )
}
