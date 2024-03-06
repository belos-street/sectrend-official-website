'use client'

import { t } from '@/i18n'
import internet_img from './img/internet.png'
import car_img from './img/car.png'
import medical_img from './img/medical.png'
import semiconductor_img from './img/semiconductor.png'
import { StaticImageData } from 'next/image'
import { Button } from 'antd'
import Image from 'next/image'
import { SectionTitle } from '@/components'
import { gotoLegacyUrl } from '@/request/api'

type Practice = {
  title: string
  content: string[]
  img: StaticImageData
  url: string
}

const practiceList: Practice[] = [
  {
    title: t('home:practice.互联网行业痛点'),
    content: [t('home:practice.互联网行业痛点content')],
    img: internet_img,
    url: 'alzs_hlw'
  },
  {
    title: t('home:practice.汽车行业痛点'),
    content: [t('home:practice.汽车行业痛点content')],
    img: car_img,
    url: 'alzs_qc'
  },
  {
    title: t('home:practice.医疗行业痛点'),
    content: [t('home:practice.医疗行业痛点content')],
    img: medical_img,
    url: 'alzs_yl'
  },
  {
    title: t('home:practice.半导体行业痛点'),
    content: [t('home:practice.半导体行业痛点content')],
    img: semiconductor_img,
    url: 'alzs_bdt'
  }
]

export const Practice: React.FC = () => {
  return (
    <section className="section__container practice__section">
      <SectionTitle animate="animate__fadeIn">{t('home:practice.与行业客户共建软件供应链安全最佳实践')}</SectionTitle>
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
                <Button type="primary" onClick={() => gotoLegacyUrl(item.url)}>
                  {t('home:了解更多')}
                </Button>
              </div>
            </div>
            <Image src={item.img} alt={item.title} priority={true} />
          </div>
        ))}
      </section>
    </section>
  )
}
