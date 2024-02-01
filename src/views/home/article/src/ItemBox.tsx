import { Tag } from 'antd'
import { Insights_img, Insights } from '../img'
import Image from 'next/image'
import './style.sass'

export const ArticleItem: React.FC = () => {
  return (
    <div className="article-item">
      <div className="article-item__header">
        <div className="article-item__title">
          <Image src={Insights} alt="Insights" />
        </div>
        <div className="article-item__tag">
          <Tag>技术干货</Tag>
          <Tag color="#33D1E3">前沿观点</Tag>
        </div>
        <div className="article-item__describe">安势带你了解最新技术干货，获取前沿观点及政策解读。</div>
      </div>
      <div className="article-item__content">
        <Image src={Insights_img} alt="Insights" className="article-item__img" height={180} width={180} />

        {/* <div className="article-item__list">55</div> */}
      </div>
    </div>
  )
}
