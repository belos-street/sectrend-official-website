import internet_img from './img/internet.png'
import car_img from './img/car.png'
import medical_img from './img/medical.png'
import semiconductor_img from './img/semiconductor.png'
import { StaticImageData } from 'next/image'
import { Button } from 'antd'
import Image from 'next/image'
import { SectionTitle } from '@/components'

type Practice = {
  title: string
  content: string[]
  img: StaticImageData
}

const practiceList: Practice[] = [
  {
    title: '互联网行业痛点&解决方案',
    content: ['互联网行业在开源治理方面主要面临安全风险与知识产权风险，需要加强软件质量管控，提升自主创新能力。'],
    img: internet_img
  },
  {
    title: '汽车行业痛点&解决方案',
    content: ['汽车行业代码量呈指数级增长，达数亿行。且其中涉及的软件供应链复杂。大力提升软件质量与信息安全建设势在必行。'],
    img: car_img
  },
  {
    title: '医疗行业痛点&解决方案',
    content: ['医疗器械是软件物料清单（SBOM）消费的“黑马行业”，软件开发有着强政策导向，行业内对软件能力的重视程度还有待提高。'],
    img: medical_img
  },
  {
    title: '半导体行业痛点&解决方案',
    content: ['半导体制造作为一种高技术、高附加值的产业，发挥日益重要的作用，然而半导体行业软件面临诸多安全和可靠性方面的问题。'],
    img: semiconductor_img
  }
]

export const Practice: React.FC = () => {
  return (
    <section className="section__container practice__section">
      <SectionTitle animate="animate__fadeIn">与行业客户共建软件供应链安全最佳实践</SectionTitle>
      <section className="screen-center practice__content">
        {practiceList.map((item) => (
          <div key={item.title} className="practice__item">
            <div className="practice__item--left">
              <h1>{item.title}</h1>
              <div>
                {item.content.map((contentItem, index) => (
                  <p key={index}>{contentItem}</p>
                ))}
              </div>
              <div>
                <Button type="primary">查看方案</Button>
              </div>
            </div>
            <Image src={item.img} alt={item.title} priority={true} />
          </div>
        ))}
      </section>
    </section>
  )
}
