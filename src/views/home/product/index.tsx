'use client'
import { Tabs, TabsProps } from 'antd'

const onChange = (key: string) => {
  console.log(key)
}

const items: TabsProps['items'] = [
  {
    key: 'sca',
    label: '清源 CleanSource SCA'
  },
  {
    key: 'sast',
    label: '清本 CleanCode SAST'
  },
  {
    key: 'binary',
    label: '清正 CleanBinary '
  }
]
export const ProductSection: React.FC = () => {
  return (
    <section className="product__section section__container">
      <h1>软件供应链安全，从代码安全开始</h1>

      <div className="screen-center device--pc">
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={items.map((item, i) => ({ ...item, children: <div className="233">{i}</div> }))}
        />
      </div>
    </section>
  )
}
