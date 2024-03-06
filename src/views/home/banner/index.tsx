'use client'
import { t } from '@/i18n'
import { Carousel, Button } from 'antd'

export const Banner: React.FC = () => (
  <Carousel autoplay dots={{ className: 'banner__dots' }}>
    <div>
      <div className="banner__container banner__container--first">
        <div className="screen-center container__box">
          <h1>{t('home:banner.构建可信代码安全合规无忧')}</h1>
          <p>{t('home:banner.构建可信代码安全合规无忧subtitle')}</p>
          <div className="btn__group">
            <Button type="primary"> {t('home:了解详情')}</Button>
            <Button type="primary" ghost>
              {t('home:联系我们')}
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
