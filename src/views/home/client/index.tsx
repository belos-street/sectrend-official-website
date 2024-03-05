import { ImageScrollList } from '@/components/ImageScrollList'
import { clients1, clients2 } from './img'
import { SectionTitle } from '@/components'

const imgList_Frist = [clients1]
const imgList_Second = [clients2]
export const Client: React.FC = () => {
  return (
    <section className="section__container client__section">
      <SectionTitle animate="animate__fadeIn">合作客户</SectionTitle>
      <ImageScrollList imgList={imgList_Frist} height={48} direction="left" repeats={6} />
      <ImageScrollList imgList={imgList_Second} height={48} direction="right" repeats={6} />
    </section>
  )
}
