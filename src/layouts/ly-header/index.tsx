'use client'

import { Divider, Dropdown, Menu, MenuProps } from 'antd'
import './style.sass'
import { MenuOutlined } from '@ant-design/icons'
import { Internationalization } from './src/internationalization'
import { useScrollDistance } from '@/hooks/useScrollDistance'
import { gotoLegacyUrl } from '@/request/api'

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'home',
    disabled: true
  },
  {
    label: '安全产品',
    key: 'SubMenu',
    children: [
      {
        label: '清源CleanSource SCA',
        key: 'CleanSourceSCA'
      },
      {
        label: '清正CleanBinary 二进制检测',
        key: 'setting:2',
        disabled: true
      },
      {
        label: '清本CleanCode SAST',
        key: 'qbsast'
      }
    ]
  },
  {
    label: '安全服务',
    key: 'mail1',
    children: [
      {
        label: '车联网安全服务',
        key: 'clwfw'
      },
      {
        label: '开源合规治理咨询',
        key: 'sbom'
      },
      {
        label: '网络安全咨询&服务',
        type: 'group',
        children: [
          {
            label: '代码审计',
            key: 'setting:21',
            disabled: true
          },
          {
            label: '安全漏洞扫描',
            key: 'setting:22',
            disabled: true
          },
          {
            label: '渗透测试',
            key: 'setting:23',
            disabled: true
          }
        ]
      }
    ]
  },
  {
    label: '行业解决方案',
    key: 'mail2',
    children: [
      {
        label: '互联网行业解决方案',
        key: 'alzs_hlw'
      },
      {
        label: '汽车行业解决方案',
        key: 'alzs_qc'
      },
      {
        label: '医疗器械行业解决方案',
        key: 'alzs_yl'
      },
      {
        label: '半导体行业解决方案',
        key: 'alzs_bdt'
      }
    ]
  },
  {
    label: '关于安势',
    key: 'mail3',
    children: [
      {
        label: '公司简介',
        key: 'gsjs'
      },
      {
        label: '安势动态',
        key: 'jsbk'
      },
      {
        label: '加入我们',
        key: 'recruit'
      },
      {
        label: '联系我们',
        key: 'lxwm'
      }
    ]
  }
]

export const LayoutHeader: React.FC = () => {
  const { scrollDistance } = useScrollDistance()

  const handleMenuClick = ({ key }: { key: string }) => {
    gotoLegacyUrl(key)
  }

  return (
    <header className={`layout__header${scrollDistance > 0 ? ' layout__header--scroll' : ''}`}>
      <section className="header__container screen-center">
        <section className="header__container--left">
          <div className="logo__text--black" />
          <Divider type="vertical" className="divider" />
          安势
        </section>
        <section className="header__container--center">
          <Menu mode="horizontal" items={items} id="header-ant-menu" onClick={handleMenuClick} />
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
