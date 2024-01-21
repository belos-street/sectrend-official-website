'use client'

import { Divider, Dropdown, Menu, MenuProps } from 'antd'
import './style.sass'
import { MenuOutlined } from '@ant-design/icons'
import { Internationalization } from './src/internationalization'

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'mail'
  },
  {
    label: '安全产品',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1'
          },
          {
            label: 'Option 2',
            key: 'setting:2'
          }
        ]
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3'
          },
          {
            label: 'Option 4',
            key: 'setting:4'
          }
        ]
      }
    ]
  },
  {
    label: '安全服务',
    key: 'mail1'
  },
  {
    label: '行业解决方案',
    key: 'mail2'
  },
  {
    label: '关于安势',
    key: 'mail3'
  }
]
export const LayoutHeader: React.FC = () => {
  return (
    <header className="layout__header">
      <section className="header__container screen-center">
        <section className="header__container--left">
          <div className="logo__text--black" />
          <Divider type="vertical" className="divider" />
          安势
        </section>
        <section className="header__container--center">
          <Menu mode="horizontal" items={items} id="header-ant-menu" />
        </section>
        <section className="header__container--right">
          <Internationalization />
          <Dropdown menu={{ items }} placement="bottomRight">
            <MenuOutlined id="header-ant-menu--phone" />
          </Dropdown>
        </section>
      </section>
    </header>
  )
}
