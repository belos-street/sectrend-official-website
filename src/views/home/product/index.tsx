'use client'
import { Button } from 'antd'
import sca_preview from '@/resource/img/sca_preview.png'
import Image from 'next/image'
import { AsTabs, SectionTitle } from '@/components'
import { TabItemProps } from '@/components/Tabs'
import { useDeviceWidth } from '@/hooks/useDeviceWidth'
import { useEffect, useRef } from 'react'

const ChangeDeviceWidth = 1000 //当浏览器宽度低于1000px，切换mobile排版
const items: TabItemProps = [
  {
    key: 'sca',
    label: '清源 CleanSource SCA',
    content: {
      title: '清源 CleanSource SCA',
      slogan: '有效管理企业开源组件安全与许可证合规',
      doc: '清源CleanSource SCA作为一款拥有完全自主知识产权的的软件成分分析工具，提供多种先进的探测技术、全面的数据库和灵活的部署方式，帮助企业快速建立准确、全面的软件物料清单（SBOM），保证开源组件和库的高度可见性。依托强大的漏洞可达性分析和漏洞治理能力，助力企业降低和管理其应用中因使用开源软件和其他第三方代码（软件）引入的安全、质量和许可证合规风险。',
      img: sca_preview
    }
  },
  {
    key: 'sast',
    label: '清本 CleanCode SAST',
    content: {
      title: '清本 CleanCode SAST',
      slogan: '实时发现代码漏洞及缺陷，提升代码质量',
      doc: '清本CleanCode SAST作为一款企业級白盒靜态代码扫描工具，凭借强大的检测能力、缺陷描述信息丰富、灵活的部署方式，帮助开发人员在软件开发生命周期 (SDLC) 早期持续自动化检测软件中包含违反安全编码标准、运行时错误和安全漏洞的编程缺路， 给出实时反馈和修复建议，助力开发团队优化工作流，低成本持续提升代码交付质量。',
      img: sca_preview
    }
  },
  {
    key: 'binary',
    label: '清正 CleanBinary ',
    content: {
      title: '清正 CleanBinary',
      slogan: '无需源码，自动检测二进制文件中的漏洞',
      doc: '清正CleanBinary二进制代码扫描分析工具针对Linux安装包、Web部書包、安卓和鸿蒙应用、loT固件包进行开源組件合规和漏润檢测。使用清正CleanBinary进行成分分析，无需依賴源码库或源文件、无入侵快速檢灣、全面直观的报告、提供专业的告警分析指导，助力企业进行上线前自检、修复和针对外部引入的软件包进行合规和安全漏洞排查。',
      img: sca_preview
    }
  }
]
const schemeBtn = () => {
  return <Button type="primary">查看方案</Button>
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
      <SectionTitle>软件供应链安全，从代码安全开始</SectionTitle>
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
                    <div>{schemeBtn()}</div>
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
                {schemeBtn()}
              </section>
            )
          })}
        </div>
      )}
    </section>
  )
}
