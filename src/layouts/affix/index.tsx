'use client'

import { MailOutlined, PhoneOutlined, SendOutlined, WechatOutlined } from '@ant-design/icons'
import { FloatButton, Popconfirm, Tooltip } from 'antd'

export const LayoutAffix: React.FC = () => {
  return (
    <FloatButton.Group shape="square" style={{ right: 24 }} trigger="hover" icon={<SendOutlined />}>
      <FloatButton icon={<WechatOutlined />} />
      <FloatButton icon={<MailOutlined />} />

      <Popconfirm placement="leftBottom" okText="Yes" cancelText="No" title="Are you sure to delete this task?">
        <FloatButton icon={<PhoneOutlined />} />
      </Popconfirm>

      <Tooltip placement="left" title={<PhoneOutlined />}>
        <FloatButton icon={<PhoneOutlined />} />
      </Tooltip>
    </FloatButton.Group>
  )
}
