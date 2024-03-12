'use client'

import React from 'react'
import './style.sass'
import { MailOutlined, PhoneOutlined, BankOutlined, WechatOutlined, LinkedinFilled, ZhihuOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import Image from 'next/image'
import sologan_img from './img/slogan.webp'
import anan_img from '@/resource/img/anan_model.webp'
import wechat from '@/resource/img/wechat.png'
import subscription from '@/resource/img/subscription.png'
import { t } from '@/i18n'
import { gotoLegacyUrl } from '@/request/api'

const WechatTipTitle = () => {
  return (
    <div className="wechat-tooltip-title">
      <div>
        <Image src={wechat} alt={t(`layout:商务合作`)} className="anan__img" />
        {t(`layout:商务合作`)}
      </div>
      <div>
        <Image src={subscription} alt={t(`layout:微信公众号`)} className="anan__img" />
        {t(`layout:微信公众号`)}
      </div>
    </div>
  )
}

export function LayoutFooter() {
  return (
    <footer className="layout-footer">
      <section className="show">
        <Image src={sologan_img} alt={t('正本清源不止于安全', { ns: 'layout' })} className="sologan__img" />
        <Image src={anan_img} alt="" className="anan__img" />
      </section>
      <section className="screen-center information">
        <section className="company">
          <div className="sectrend-logo" />
          <div className="line" />
          <p className="slogan">正本清源，不止于安全</p>
          <p className="slogan slogan-en">Beyond security, more than open source</p>
          <section className="text-icon">
            <MailOutlined />
            <p>info@secrted.com.cn</p>
          </section>
          <section className="text-icon">
            <PhoneOutlined />
            <p>021-64181628</p>
          </section>
          <section className="text-icon">
            <BankOutlined />
            <p>{t('公司地址', { ns: 'layout' })}</p>
          </section>
        </section>
        <section className="list">
          <h3>{t('产品中心', { ns: 'layout' })}</h3>
          <ul>
            <li onClick={() => gotoLegacyUrl('CleanSourceSCA')}>{t('软件成分分析扫描', { ns: 'layout' })}</li>
            <li>{t('二进制代码扫描', { ns: 'layout' })}</li>
            <li onClick={() => gotoLegacyUrl('qbsast')}>{t('静态代码扫描', { ns: 'layout' })}</li>
            <li onClick={() => gotoLegacyUrl('clwfw')}>{t('车联网安全服务', { ns: 'layout' })}</li>
            <li>{t('网络安全咨询服务', { ns: 'layout' })}</li>
            <li onClick={() => gotoLegacyUrl('sbom')}>{t('开源合规治理咨询', { ns: 'layout' })}</li>
          </ul>
        </section>
        <section className="list">
          <h3>{t('关于', { ns: 'layout' })}</h3>
          <ul>
            <li onClick={() => gotoLegacyUrl('gsjs')}>{t('关于我们', { ns: 'layout' })}</li>
            <li onClick={() => gotoLegacyUrl('recruit')}>{t('加入我们', { ns: 'layout' })}</li>
            <li onClick={() => gotoLegacyUrl('lxwm')}>{t('联系我们', { ns: 'layout' })}</li>
            <li className="contact">
              <Tooltip title={WechatTipTitle()} arrow={true} overlayClassName="footer__wechat-tooltip">
                <WechatOutlined />
              </Tooltip>
              <a href="https://www.linkedin.cn" target="_blank">
                <LinkedinFilled />
              </a>
              <a href=" https://www.zhihu.com/org/an-shi-xin-xi-sectrend" target="_blank">
                <ZhihuOutlined />
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section className="screen-center copyright">
        <p>版权所有 © 上海安势信息技术有限公司</p>
        <a target="_blank" href="https://beian.miit.gov.cn">
          <p>沪ICP备2021017773号</p>
        </a>
        <div className="site-support">
          本网站支持 <div className="box">IPV6</div>
        </div>
      </section>
    </footer>
  )
}
