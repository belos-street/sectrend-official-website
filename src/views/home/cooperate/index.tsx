import Image from 'next/image'
import {
  caict_1,
  linux_2,
  openssf_3,
  oschina_4,
  openChain_5,
  kaiyuanshe_6,
  zhongqiyan_7,
  copu_8,
  openeuler,
  openanolis,
  opensdv,
  fudan,
  jiaotong
} from './img'

const organImgList = [caict_1, linux_2, openssf_3, oschina_4, openChain_5, kaiyuanshe_6, zhongqiyan_7, copu_8]
const communityImgList = [openeuler, openanolis, opensdv]
const schoolImgList = [fudan, jiaotong]

export const Cooperate: React.FC = () => {
  return (
    <section className="section__container cooperate__section">
      <h1>合作机构/基金会</h1>
      <div className="img__container">
        {organImgList.map((item, index) => (
          <Image key={index} src={item} alt="" />
        ))}
      </div>
      <h1>合作社区</h1>
      <div className="img__container">
        {communityImgList.map((item, index) => (
          <Image key={index} src={item} alt="" />
        ))}
      </div>
      <h1>合作高校/研究机构</h1>
      <div className="img__container">
        {schoolImgList.map((item, index) => (
          <Image key={index} src={item} alt="" />
        ))}
      </div>
    </section>
  )
}
