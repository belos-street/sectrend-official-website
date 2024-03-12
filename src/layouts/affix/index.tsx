'use client'

import { MailOutlined, PhoneOutlined, SendOutlined, WechatOutlined } from '@ant-design/icons'
import { FloatButton, Tooltip } from 'antd'
import Image from 'next/image'
import wechat from '@/resource/img/wechat.png'
import { t } from '@/i18n'
import './style.sass'

const WechatTipTitle = () => {
  return (
    <div className="wechat-tooltip-title">
      <div>
        <Image src={wechat} alt={t(`layout:商务合作`)} className="anan__img" />
        {t(`layout:商务合作`)}
      </div>
    </div>
  )
}

export const LayoutFloatButton: React.FC = () => {
  return (
    <FloatButton.Group shape="square" style={{ right: 0 }} className="sc__float--group">
      <Tooltip placement="left" title={WechatTipTitle()} overlayClassName="affix__wechat-tooltip">
        <FloatButton icon={<WechatOutlined />} />
      </Tooltip>
      <Tooltip placement="left" title="info@secrted.com.cn">
        <FloatButton icon={<MailOutlined />} />
      </Tooltip>
      <Tooltip placement="left" title="021-64181628">
        <FloatButton icon={<PhoneOutlined />} />
      </Tooltip>
    </FloatButton.Group>
  )
}
