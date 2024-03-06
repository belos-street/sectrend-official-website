'use client'

import { Divider, Dropdown, Menu, MenuProps } from 'antd'
import { t } from '@/i18n'
import './style.sass'
import { MenuOutlined } from '@ant-design/icons'
import { Internationalization } from './src/internationalization'
import { useScrollDistance } from '@/hooks/useScrollDistance'
import { gotoLegacyUrl } from '@/request/api'

const items: MenuProps['items'] = [
  {
    label: t('首页', { ns: 'layout' }),
    key: 'home',
    disabled: true
  },
  {
    label: t('安全产品', { ns: 'layout' }),
    key: 'SubMenu',
    children: [
      {
        label: t('清源CleanSourceSCA', { ns: 'layout' }),
        key: 'CleanSourceSCA'
      },
      {
        label: t('清正CleanBinary二进制检测', { ns: 'layout' }),
        key: 'setting:2',
        disabled: true
      },
      {
        label: t('清本CleanCodeSAST', { ns: 'layout' }),
        key: 'qbsast'
      }
    ]
  },
  {
    label: t('安全服务', { ns: 'layout' }),
    key: 'mail1',
    children: [
      {
        label: t('车联网安全服务', { ns: 'layout' }),
        key: 'clwfw'
      },
      {
        label: t('开源合规治理咨询', { ns: 'layout' }),
        key: 'sbom'
      },
      {
        label: t('网络安全咨询服务', { ns: 'layout' }),
        type: 'group',
        children: [
          {
            label: t('代码审计', { ns: 'layout' }),
            key: 'setting:21',
            disabled: true
          },
          {
            label: t('安全漏洞扫描', { ns: 'layout' }),
            key: 'setting:22',
            disabled: true
          },
          {
            label: t('渗透测试', { ns: 'layout' }),
            key: 'setting:23',
            disabled: true
          }
        ]
      }
    ]
  },
  {
    label: t('行业解决方案', { ns: 'layout' }),
    key: 'mail2',
    children: [
      {
        label: t('互联网行业解决方案', { ns: 'layout' }),
        key: 'alzs_hlw'
      },
      {
        label: t('汽车行业解决方案', { ns: 'layout' }),
        key: 'alzs_qc'
      },
      {
        label: t('医疗器械行业解决方案', { ns: 'layout' }),
        key: 'alzs_yl'
      },
      {
        label: t('半导体行业解决方案', { ns: 'layout' }),
        key: 'alzs_bdt'
      }
    ]
  },
  {
    label: t('关于安势', { ns: 'layout' }),
    key: 'mail3',
    children: [
      {
        label: t('公司简介', { ns: 'layout' }),
        key: 'gsjs'
      },
      {
        label: t('安势动态', { ns: 'layout' }),
        key: 'jsbk'
      },
      {
        label: t('加入我们', { ns: 'layout' }),
        key: 'recruit'
      },
      {
        label: t('联系我们', { ns: 'layout' }),
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
          {t('安势', { ns: 'layout' })}
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
