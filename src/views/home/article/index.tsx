'use client'

import { useHover } from '@/hooks/useHover'
import { useEffect, useRef } from 'react'
import { RowAnimation, ItemAnimation } from './animation'
import { ArticleItem } from './src/ItemBox'

export const Article: React.FC = () => {
  const rowTopRef = useRef<HTMLDivElement>(null)
  const rowBottomRef = useRef<HTMLDivElement>(null)
  const insightsRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef<HTMLDivElement>(null)
  const trendingRef = useRef<HTMLDivElement>(null)
  const productRef = useRef<HTMLDivElement>(null)

  const { isHovered: isTopHovered } = useHover(rowTopRef)
  const { isHovered: isBottomHovered } = useHover(rowBottomRef)
  const { isHovered: isInsightsHovered } = useHover(insightsRef)
  const { isHovered: isNewsHovered } = useHover(newsRef)
  const { isHovered: isTrendingHovered } = useHover(trendingRef)
  const { isHovered: isProductHovered } = useHover(productRef)

  useEffect(() => {
    new RowAnimation(rowTopRef.current!, isTopHovered).record().change().play()
  }, [isTopHovered])

  useEffect(() => {
    new RowAnimation(rowBottomRef.current!, isBottomHovered).record().change().play()
  }, [isBottomHovered])

  useEffect(() => {
    new ItemAnimation(insightsRef.current!, isInsightsHovered).record().change().play()
  }, [isInsightsHovered])

  useEffect(() => {
    new ItemAnimation(newsRef.current!, isNewsHovered).record().change().play()
  }, [isNewsHovered])

  useEffect(() => {
    new ItemAnimation(trendingRef.current!, isTrendingHovered).record().change().play()
  }, [isTrendingHovered])

  useEffect(() => {
    new ItemAnimation(productRef.current!, isProductHovered).record().change().play()
  }, [isProductHovered])

  return (
    <section className="section__container article__section">
      <section className="screen-center article__content ">
        <div className={`article-row article-row--top${isTopHovered ? ' article-row--actived' : ''}`} ref={rowTopRef}>
          <section className="article-content--item article-item--left article-item--insights" ref={insightsRef}>
            <ArticleItem />
          </section>
          <section className="article-content--item article-item--right article-item--news" ref={newsRef}>
            22
          </section>
        </div>
        <div className={`article-row article-item--bottom${isBottomHovered ? ' article-row--actived' : ''}`} ref={rowBottomRef}>
          <section className="article-content--item article-item--left article-item--trending" ref={trendingRef}>
            33
          </section>
          <section className="article-content--item article-item--right article-item--product" ref={productRef}>
            44
          </section>
        </div>
      </section>
    </section>
  )
}
