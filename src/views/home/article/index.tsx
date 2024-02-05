'use client'

import { useHover } from '@/hooks/useHover'
import { useEffect, useRef } from 'react'
import { RowAnimation, ItemAnimation } from './animation'
import { ArticleItem } from './src/ItemBox'

/*https://juejin.cn/book/7307859898316881957/section/7309077054263066662*/
// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
//   const data = await res.json()

//   console.log(data)
//   return { props: { data } }
// }

/*https://juejin.cn/book/7307859898316881957/section/7309076949182709811*/

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//   if (!res.ok) {
//     // 这会触发最近的 `error.js` 错误边界
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

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

  const handleItemHoverd = (isHovered: boolean) => (isHovered ? 'article-item--actived' : '')

  return (
    <section className="section__container article__section">
      <section className="screen-center article__content ">
        <div className={`article-row article-row--top${isTopHovered ? ' article-row--actived' : ''}`} ref={rowTopRef}>
          <section
            className={`article-content--item article-item--left article-item--insights${handleItemHoverd(isInsightsHovered)}`}
            ref={insightsRef}>
            <ArticleItem />
          </section>
          <section
            className={`article-content--item article-item--right article-item--news${handleItemHoverd(isNewsHovered)}`}
            ref={newsRef}>
            <ArticleItem />
          </section>
        </div>
        <div className={`article-row article-item--bottom${isBottomHovered ? ' article-row--actived' : ''}`} ref={rowBottomRef}>
          <section
            className={`article-content--item article-item--left article-item--trending${handleItemHoverd(isTrendingHovered)}`}
            ref={trendingRef}>
            <ArticleItem />
          </section>
          <section
            className={`article-content--item article-item--right article-item--product${handleItemHoverd(isProductHovered)}`}
            ref={productRef}>
            <ArticleItem />
          </section>
        </div>
      </section>
    </section>
  )
}
