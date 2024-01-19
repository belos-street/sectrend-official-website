'use client'
import { Carousel } from 'antd'

export const Banner: React.FC = () => (
  <Carousel autoplay dots={{ className: 'banner__dots' }}>
    <div>
      <div className="banner__container banner__container--first"></div>
    </div>
    {/* <div>
      <div className="banner__container banner__container--second">22</div>
    </div> */}
  </Carousel>
)
