import internet_img from './img/internet.png'
import car_img from './img/car.png'
import medical_img from './img/medical.png'
import semiconductor_img from './img/semiconductor.png'
import { StaticImageData } from 'next/image'
import { Button } from 'antd'
import Image from 'next/image'

type Practice = {
  title: string
  content: string[]
  img: StaticImageData
}

const practiceList: Practice[] = [
  {
    title: '互联网行业痛点&解决方案',
    content: [
      '组件通用漏洞风险急剧上',
      '开源软件许可证繁多且复杂',
      '多部门协作难，开发检测扫描滞后',
      '开源软件合规体系建设能力薄弱'
    ],
    img: internet_img
  },
  {
    title: '汽车行业痛点&解决方案',
    content: ['V型开发流程的弊端导致发现风险滞后', '代码量激增导致攻击类型多样', '出海面临的各项合规标准及法律风险'],
    img: car_img
  },
  {
    title: '医疗器械行业痛点&解决方案',
    content: ['SBOM逐渐成为医疗器械上市前的基本要求', '一旦因信息安全造成事故', '合规要求直接影响医疗器械产品能否上市'],
    img: medical_img
  },
  {
    title: '半导体行业痛点&解决方案',
    content: ['开源许可证合规问题', '漏洞和安全补丁', '代码质量和可信度', '依赖关系管理'],
    img: semiconductor_img
  }
]

export const Practice: React.FC = () => {
  return (
    <section className="section__container practice__section">
      <h1>与行业客户共建软件供应链安全最佳实践</h1>
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
