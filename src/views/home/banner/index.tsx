'use client'
import { Carousel, Button } from 'antd'

export const Banner: React.FC = () => (
  <Carousel autoplay dots={{ className: 'banner__dots' }}>
    <div>
      <div className="banner__container banner__container--first">
        <div className="screen-center container__box">
          <h1>
            供应链安全治理
            <br />
            解决方案
          </h1>
          <p>安势信息专注于构建DevSecOps工具链，致力于提供世界级的应用安全产品</p>
          <div className="btn__group">
            <Button type="primary" size="large">
              了解详情
            </Button>
            <Button type="primary" ghost size="large">
              联系我们
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="banner__container banner__container--second"></div>
    </div>
  </Carousel>
)
