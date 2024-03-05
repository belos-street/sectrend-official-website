import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/components/AntdRegistry'
import '@/styles/base.sass'
import '@/styles/common.sass'
import 'animate.css'
import { LayoutFloatButton, LayoutHeader, LayoutFooter } from '@/layouts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '安势 - Sectrend',
  keywords:
    '应用软件安全,开源治理,软件供应链安全,开源代码安全,devsecops,开源软件漏洞,开源合规,软件组成分析,开源软件供应链,软件成分分析,sca,sca软件成分分析,sbom,软件物料清单,代码安全扫描工具,安势信息,上海安势,安势,安势清源,cleansource,清源,清源sca,静态代码扫描,sast,静态代码扫描工具,代码质量,代码质量检查工具,二进制代码,二进制代码扫描,网络信息安全服务,车联网安全,清本CleanCode,安势清本,CleanCode,清本,清本sast,清正CleanBinary,清正,CleanBinary',
  description:
    '安势信息是国内先进的软件供应链安全治理解决方案提供商，提供包括清源CleanSource SCA（软件成分分析）、清本CleanCode SAST（企业级白盒静态代码扫描）、清正CleanBinary (二进制代码扫描)、安全服务等产品和解决方案'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <StyledComponentsRegistry>
        <body className={inter.className} id="sectrend-site">
          <LayoutHeader />
          <LayoutFloatButton />
          {children}
          <LayoutFooter />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
