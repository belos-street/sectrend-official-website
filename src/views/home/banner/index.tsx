'use client'
import { t } from '@/i18n'
import { Carousel, Button } from 'antd'

export const Banner: React.FC = () => (
  <Carousel autoplay dots={{ className: 'banner__dots' }}>
    <div>
      <div className="banner__container banner__container--first">
        <div className="screen-center container__box">
          <h1>
            {t('构建可信代码', { ns: 'home' })}
            <br />
            {t('安全合规无忧', { ns: 'home' })}
          </h1>
          <p> {t('安势信息助您一站式搭建DevSecOps开发流程', { ns: 'home' })}</p>
          <div className="btn__group">
            <Button type="primary"> {t('了解详情', { ns: 'home' })}</Button>
            <Button type="primary" ghost>
              {t('联系我们', { ns: 'home' })}
            </Button>
          </div>
        </div>
      </div>
    </div>
    {/* <div>
      <div className="banner__container banner__container--second"></div>
    </div> */}
  </Carousel>
)
