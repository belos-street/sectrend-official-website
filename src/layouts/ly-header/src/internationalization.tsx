import { GlobalOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'

const items: MenuProps['items'] = [
  {
    key: '4',
    label: '中文'
  },
  {
    key: '3',
    label: 'English'
  }
]

export const Internationalization: React.FC = () => {
  return (
    <Dropdown menu={{ items }} placement="bottom">
      <GlobalOutlined />
    </Dropdown>
  )
}
