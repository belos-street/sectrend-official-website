'use client'

import { useHover } from '@/hooks/useHover'
import { useRef } from 'react'

export const Article: React.FC = () => {
  const rowTopRef = useRef<HTMLDivElement>(null)
  const rowBottomRef = useRef<HTMLDivElement>(null)

  const { isHovered } = useHover(rowTopRef)

  return (
    <section className="section__container article__section">
      <section className="screen-center article__content">
        <div className="article-row article-row--top" ref={rowTopRef}>
          <section className="article-content--item article-item--left  article-item--insights">11 {isHovered ? 1 : 0}</section>
          <section className="article-content--item article-item--right article-item--news">22</section>
        </div>
        <div className="article-row article-item--bottom" ref={rowBottomRef}>
          <section className="article-content--item article-item--left article-item--trending">33</section>
          <section className="article-content--item article-item--right  article-item--product">44</section>
        </div>
      </section>
    </section>
  )
}
