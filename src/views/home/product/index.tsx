'use client'
import { Button } from 'antd'
import { t } from '@/i18n'
import sca_preview from '@/resource/img/sca_preview.png'
import sast_preview from '@/resource/img/sast_preview.png'
import binary_preview from '@/resource/img/binary_preview.png'
import Image from 'next/image'
import { AsTabs, SectionTitle } from '@/components'
import { TabItemProps } from '@/components/Tabs'
import { useDeviceWidth } from '@/hooks/useDeviceWidth'
import { useEffect, useRef } from 'react'
import { gotoLegacyUrl } from '@/request/api'

const ChangeDeviceWidth = 1000 //当浏览器宽度低于1000px，切换mobile排版
const items: TabItemProps = [
  {
    key: 'sca',
    label: t('layout:清源CleanSourceSCA'),
    content: {
      title: t('layout:清源CleanSourceSCA'),
      slogan: t('home:product.scaSubtitle'),
      doc: t('home:product.scaDescribe'),
      img: sca_preview
    }
  },
  {
    key: 'sast',
    label: t('layout:清本CleanCodeSAST'),
    content: {
      title: t('layout:清本CleanCodeSAST'),
      slogan: t('home:product.sastSubtitle'),
      doc: t('home:product.sastDescribe'),
      img: sast_preview
    }
  },
  {
    key: 'binary',
    label: t('layout:清正CleanBinary二进制检测'),
    content: {
      title: t('layout:清正CleanBinary二进制检测'),
      slogan: t('home:product.binarySubtitle'),
      doc: t('home:product.binaryDescribe'),
      img: binary_preview
    }
  }
]

const schemeBtn = (key: string) => {
  let url = ''
  if (key === 'sca') {
    url = 'CleanSourceSCA'
  } else if (key === 'sast') {
    url = 'qbsast'
  } else {
    return <></>
  }

  return (
    <Button type="primary" onClick={() => gotoLegacyUrl(url)}>
      {t(`home:了解更多`)}
    </Button>
  )
}

export const ProductSection: React.FC = () => {
  const { windowWidth } = useDeviceWidth()
  const normalScreenRef = useRef<HTMLDivElement>(null)

  /** 控制显示效果 去掉生硬动画 */
  useEffect(() => {
    if (windowWidth >= ChangeDeviceWidth && normalScreenRef.current) {
      normalScreenRef.current.classList.remove('screen__normal--hide')
      normalScreenRef.current.classList.add('screen__normal--show', 'animate__animated', 'animate__fadeIn')
    } else if (windowWidth < ChangeDeviceWidth && windowWidth > 0 && normalScreenRef.current) {
      normalScreenRef.current.classList.remove('screen__normal--show')
      normalScreenRef.current.classList.add('screen__normal--hide')
    }
  }, [windowWidth])

  return (
    <section className="product__section section__container">
      <SectionTitle animate="animate__fadeIn">{t('home:product.软件供应链安全始于代码安全')}</SectionTitle>
      <div className={`screen-center screen__normal`} ref={normalScreenRef}>
        <AsTabs
          defaultActiveKey="sca"
          items={items.map((item) => {
            const { content } = item
            return {
              ...item,
              children: (
                <div className="tab__content animate__animated animate__fadeIn">
                  <div className="tab__content--text">
                    <div>
                      <h2>{content.title}</h2>
                      <p className="text-slogan">{content.slogan}</p>
                    </div>
                    <p className="doc">{content.doc}</p>
                    <div>{schemeBtn(item.key)}</div>
                  </div>
                  <Image priority={true} src={content.img} alt={content.title} />
                </div>
              )
            }
          })}
          action="hover"
        />
      </div>

      {windowWidth < ChangeDeviceWidth && windowWidth > 0 && (
        <div className="screen__small animate__animated animate__fadeIn">
          {items.map((item) => {
            const { content } = item
            return (
              <section className="product__item" key={item.key}>
                <Image src={content.img} alt={content.title} priority={true} />
                <h2>{content.title}</h2>
                <p>{content.slogan}</p>
                <p className="doc">{content.doc}</p>
                {schemeBtn(item.key)}
              </section>
            )
          })}
        </div>
      )}
    </section>
  )
}
