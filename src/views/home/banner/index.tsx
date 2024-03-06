'use client'
import { t } from '@/i18n'
import { gotoLegacyUrl } from '@/request/api'
import { Carousel, Button } from 'antd'

export const Banner: React.FC = () => (
  <Carousel autoplay dots={{ className: 'banner__dots' }}>
    <div>
      <div className="banner__container banner__container--first">
        <div className="screen-center container__box">
          <h1>
            {t('home:banner.构建可信代码')}
            <br />
            {t('home:banner.安全合规无忧')}
          </h1>
          <p>{t('home:banner.构建可信代码安全合规无忧subtitle')}</p>
          <div className="btn__group">
            <Button type="primary" onClick={() => gotoLegacyUrl('sqsy')}>
              {t('申请试用', { ns: 'home' })}
            </Button>
            <Button type="primary" ghost onClick={() => gotoLegacyUrl('lxwm')}>
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
