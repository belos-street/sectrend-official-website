import { Button } from 'antd'
import { LayoutFooter } from '@/layouts/ly-footer'
import '@/i18n'
import { t } from 'i18next'

export default function Home() {
  return (
    <main>
      <Button type="primary">{t('hello2', { ns: 'pro' })}</Button>
      <LayoutFooter />
    </main>
  )
}
