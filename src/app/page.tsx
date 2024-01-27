import { Button } from 'antd'

import '@/i18n'
import { t } from 'i18next'
import { Banner, ProductSection, Client } from '../views/home'

export default function Home() {
  return (
    <main>
      <Banner />
      <ProductSection />
      <Client />
      <Button type="primary">{t('hello2', { ns: 'pro' })}</Button>
    </main>
  )
}
