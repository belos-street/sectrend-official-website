import { StaticImageData } from 'next/image'
import Image from 'next/image'
import './style.sass'

export type TabProps = {
  imgList: StaticImageData[]
  height: number
  direction: 'left' | 'right'
  repeats?: number
}

// 复制数组
const getImageList = (imgList: StaticImageData[], repeats = 1) => {
  const list: StaticImageData[] = []
  for (let i = 0; i < repeats; i++) {
    list.push(...imgList)
  }
  return list
}

export const ImageScrollList: React.FC<TabProps> = (props) => {
  const imgList = getImageList(props.imgList, props.repeats)
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
