import React, { useState } from 'react'
import './tabs.sass'

export type TabItemProps = {
  label: string | React.ReactNode
  children?: string | React.ReactNode
  key: string
  [keyWord: string]: any
}[]

export type TabProps = {
  items: TabItemProps
  defaultActiveKey: string
  action?: 'click' | 'hover' // 默认点击切换
  onChange?: (key: string) => void
}

export const Tabs: React.FC<TabProps> = ({ items, defaultActiveKey, onChange, action }) => {
  /** init */
  !action && (action = 'click')
  const [activeTab, setActiveTab] = useState(defaultActiveKey || items[0].key)
  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey)
    onChange && onChange(tabKey)
  }

  return (
    <div className="sc-tabs">
      <div className="sc-tab__header">
        {items.map((item) => (
          <div
            className={`tab__header--item${item.key === activeTab ? ' header__item--active' : ''}`}
            key={item.key}
            onClick={() => action === 'click' && handleTabChange(item.key)}
            onMouseEnter={() => action === 'hover' && handleTabChange(item.key)}>
            {item.label}
          </div>
        ))}
      </div>
      <div className="sc-tab__content">
        {items.map((item) => (
          <div
            key={item.key}
            className={`sc-tab__content--item${item.key === activeTab ? 'content--item__active' : ''}`}
            style={{ display: item.key === activeTab ? 'block' : 'none' }}>
            {item.children}
          </div>
        ))}
      </div>
    </div>
  )
}
