import { StaticImageData } from 'next/image'
import Image from 'next/image'
import './style.sass'

export type TabProps = {
  imgList: StaticImageData[]
  height: number
  direction: 'left' | 'right'
}

export const ImageScrollList: React.FC<TabProps> = (props) => {
  const imgList = [...props.imgList]
  return (
    <div className="image-scroll__container">
      <div className={`scroll-list__view scroll-list__view--${props.direction === 'left' ? 'l2r' : 'r2l'}`}>
        {imgList.map((img, index) => (
          <Image key={index} src={img} alt="img" style={{ height: props.height, width: 'auto' }} />
        ))}
      </div>
    </div>
  )
}
