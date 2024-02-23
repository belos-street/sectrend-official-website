'use client'

import { MailOutlined, PhoneOutlined, SendOutlined, WechatOutlined } from '@ant-design/icons'
import { FloatButton, Tooltip } from 'antd'

export const LayoutFloatButton: React.FC = () => {
  return (
    <FloatButton.Group shape="square" style={{ right: 24 }} trigger="hover" icon={<SendOutlined />}>
      <FloatButton icon={<WechatOutlined />} />
      <FloatButton icon={<MailOutlined />} />

      <Tooltip placement="left" title={<PhoneOutlined />}>
        <FloatButton icon={<PhoneOutlined />} />
      </Tooltip>
    </FloatButton.Group>
  )
}
