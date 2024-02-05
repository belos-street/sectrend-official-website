import '@/i18n'
// import { t } from 'i18next'
import { Banner, ProductSection, Client, Practice, Cooperate, Article } from '../views/home'
// import { Button } from 'antd'

export default function Home() {
  return (
    <main>
      <Banner />
      <ProductSection />
      <Client />
      <Practice />
      <Article />
      <Cooperate />

      {/* <Button type="primary">{t('hello2', { ns: 'pro' })}</Button> */}
    </main>
  )
}
