import React from 'react'
import './style.sass'
import { MailOutlined, PhoneOutlined, BankOutlined, WechatOutlined, LinkedinFilled, ZhihuOutlined } from '@ant-design/icons'
import Image from 'next/image'
import sologan_img from './img/slogan.webp'
import anan_img from '@/resource/img/anan_model.webp'
import { t } from '@/i18n'

export function LayoutFooter() {
  return (
    <footer className="layout-footer">
      <section className="show">
        <Image src={sologan_img} alt="正本清源，不止于安全" className="sologan__img" />
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
            <p>上海市徐汇区云锦路500号绿地汇中心A座2018室</p>
          </section>
        </section>
        <section className=" list">
          <h3>{t('产品中心', { ns: 'layout' })}</h3>
          <ul>
            <li>清源 CleanSource 软件成分分析扫描 | SCA</li>
            <li>清本 CleanCode 静态代码扫描 | SAST </li>
            <li>清正 CleanBinary 二进制代码扫描</li>
            <li>{t('车联网安全服务', { ns: 'layout' })}</li>
            <li>{t('网络安全咨询服务', { ns: 'layout' })}</li>
            <li>{t('开源合规治理咨询', { ns: 'layout' })}</li>
          </ul>
        </section>
        <section className="list">
          <h3>{t('关于', { ns: 'layout' })}</h3>
          <ul>
            <li>{t('关于我们', { ns: 'layout' })}</li>
            <li>{t('加入我们', { ns: 'layout' })}</li>
            <li>{t('联系我们', { ns: 'layout' })}</li>
            <li className="contact">
              <WechatOutlined />
              <LinkedinFilled />
              <ZhihuOutlined />
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
