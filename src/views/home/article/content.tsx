'use client'

import { useHover } from '@/hooks/useHover'
import { useEffect, useRef, memo } from 'react'
import { RowAnimation, ItemAnimation } from './animation'
import { ArticleItem, ArticleItemProps } from './src/ItemBox'
import { Insights_img, Insights, News_img, News, Trending_img, Trending, Product_img, Product } from './img'

const dataList: ArticleItemProps[] = [
  {
    name: 'insights',
    titleImg: Insights,
    img: Insights_img,
    tag: {
      color: '#00C5DC',
      list: ['技术干货', '前沿观点']
    },
    describe: '安势带你了解最新技术干货，获取前沿观点及政策解读。',
    list: [
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      },
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架1',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      },
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架2',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      }
    ]
  },
  {
    name: 'news',
    titleImg: News,
    img: News_img,
    tag: {
      color: '#1A62F5',
      list: ['产品动态', '活动曝光']
    },
    describe: '第一时间了解产品动态，活动曝光等相关资讯',
    list: [
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      },
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架1',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      },
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架2',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      }
    ]
  },
  {
    name: 'trending',
    titleImg: Trending,
    img: Trending_img,
    tag: {
      color: '#21B351',
      list: ['网络安全', '开源生态']
    },
    describe: '软件供应链安全行业动态，开源产业生态相关讯息一手掌握',
    list: [
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      },
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架1',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      },
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架2',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      }
    ]
  },
  {
    name: 'product',
    titleImg: Product,
    img: Product_img,
    tag: {
      color: '#7B6DFF',
      list: ['正本清源']
    },
    describe: '“正本清源”多条产品线超多一手资料尽在此处',
    list: [
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      },
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架1',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      },
      {
        title: '如何使用TypeScript实现一个简单的MVVM框架2',
        content: 'MVVM框架是使用TypeScript实现的，它具有以下特点：',
        time: '2023-03-21'
      }
    ]
  }
]

export const Content: React.FC = () => {
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

  const handleItemHoverd = (isHovered: boolean) => (isHovered ? ' article-item--actived' : '')

  return (
    <section className="section__container article__section">
      <section className="screen-center article__content">
        <div className={`article-row article-row--top${isTopHovered ? ' article-row--actived' : ''}`} ref={rowTopRef}>
          <section
            className={`article-content--item article-item--left article-item--insights${handleItemHoverd(isInsightsHovered)}`}
            ref={insightsRef}>
            <ArticleItem {...dataList[0]} />
          </section>
          <section
            className={`article-content--item article-item--right article-item--news${handleItemHoverd(isNewsHovered)}`}
            ref={newsRef}>
            <ArticleItem {...dataList[1]} />
          </section>
        </div>
        <div className={`article-row article-item--bottom${isBottomHovered ? ' article-row--actived' : ''}`} ref={rowBottomRef}>
          <section
            className={`article-content--item article-item--left article-item--trending${handleItemHoverd(isTrendingHovered)}`}
            ref={trendingRef}>
            <ArticleItem {...dataList[2]} />
          </section>
          <section
            className={`article-content--item article-item--right article-item--product${handleItemHoverd(isProductHovered)}`}
            ref={productRef}>
            <ArticleItem {...dataList[3]} />
          </section>
        </div>
      </section>
    </section>
  )
}
