import { ImageScrollList } from '@/components/ImageScrollList'
import {
  alibaba,
  baidu,
  bmw,
  bosch,
  dahua,
  dianxin,
  honor,
  jiyue,
  lingpao,
  mi,
  nio,
  quanxin,
  tencent,
  uniontech,
  vivo,
  yanfeng,
  zone,
  unisoc
} from './img'

const imgList_Frist = [tencent, alibaba, baidu, dianxin, honor, vivo, mi, bosch]
const imgList_Second = [jiyue, bmw, nio, lingpao, zone, yanfeng, unisoc, dahua, uniontech, quanxin]
export const Client: React.FC = () => {
  return (
    <section className="section__container client__section">
      <h1>合作客户</h1>
      <ImageScrollList imgList={imgList_Frist} height={48} direction="left" repeats={3} />
      <ImageScrollList imgList={imgList_Second} height={48} direction="right" repeats={3} />
    </section>
  )
}
