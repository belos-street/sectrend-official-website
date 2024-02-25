import { GlobalOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import { i18next } from '@/i18n'

const items: MenuProps['items'] = [
  {
    key: 'zh',
    label: '中文',
    onClick: () => i18next.changeLanguage('zh')
  },
  {
    key: 'en',
    label: 'English',
    onClick: () => i18next.changeLanguage('en')
  }
]

export const Internationalization: React.FC = () => {
  return (
    <Dropdown menu={{ items }} placement="bottom">
      <GlobalOutlined />
    </Dropdown>
  )
}
