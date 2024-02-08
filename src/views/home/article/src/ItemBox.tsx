import { Tag } from 'antd'
import Image, { StaticImageData } from 'next/image'

export type ArticleItemProps = {
  titleImg: string
  img: StaticImageData
  tag: {
    list: string[]
    color: string
  }
  describe: string
  list: {
    title: string
    content: string
    time: string
  }[]
  name: 'insights' | 'news' | 'trending' | 'product'
}
export const ArticleItem: React.FC<ArticleItemProps> = ({ titleImg, img, tag, describe, list, name }) => {
  return (
    <div className="article-item">
      <div className="article-item__header">
        <div className="article-item__title">
          <Image src={titleImg} alt={name} />
          <p>查看全部</p>
        </div>
        <div className="article-item__tag">
          {tag.list.map((item, index) => (
            <Tag key={index} color={tag.color}>
              {item}
            </Tag>
          ))}
        </div>
        <div className="article-item__describe">{describe}</div>
      </div>
      <div className="article-item__content">
        <Image src={img} alt={name} className="article-item__img" height={180} width={180} />
        <ul className="article-item__list">
          {list.map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p>{item.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
