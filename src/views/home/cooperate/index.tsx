import { t } from '@/i18n'
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
import { SectionTitle } from '@/components'

const organImgList = [caict_1, linux_2, openssf_3, oschina_4, openChain_5, kaiyuanshe_6, zhongqiyan_7, copu_8]
const communityImgList = [openeuler, openanolis, opensdv]
const schoolImgList = [fudan, jiaotong]

export const Cooperate: React.FC = () => {
  return (
    <section className="section__container cooperate__section">
      <SectionTitle animate="animate__fadeIn">{t('home:cooperate.合作机构基金会')}</SectionTitle>
      <div className="img__container">
        {organImgList.map((item, index) => (
          <Image key={index} src={item} alt="" />
        ))}
      </div>
      <SectionTitle animate="animate__fadeIn">{t('home:cooperate.合作社区')}</SectionTitle>
      <div className="img__container">
        {communityImgList.map((item, index) => (
          <Image key={index} src={item} alt="" />
        ))}
      </div>
      <SectionTitle animate="animate__fadeIn">{t('home:cooperate.合作高校研究机构')}</SectionTitle>
      <div className="img__container">
        {schoolImgList.map((item, index) => (
          <Image key={index} src={item} alt="" />
        ))}
      </div>
    </section>
  )
}
