import Image from 'next/image'
import client_img from '@/resource/img/client_banner.png'
export const Client: React.FC = () => {
  return (
    <section className="section__container client__section">
      <h1>合作客户</h1>
      <Image priority={true} src={client_img} alt="" height={120} />
    </section>
  )
}
