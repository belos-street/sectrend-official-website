import React from 'react'
import './style.sass'
import { MailOutlined } from '@ant-design/icons'

export function LayoutFooter() {
  return (
    <footer className="layout-footer">
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
            <MailOutlined />
            <p>021-64181628</p>
          </section>
          <section className="text-icon">
            <MailOutlined />
            <p>上海市徐汇区云锦路500号绿地汇中心A座2018室</p>
          </section>
        </section>
        <section className=" list">
          <h3>产品中心</h3>
          <ul>
            <li>清源 CleanSource 软件成分分析扫描 | SCA</li>
            <li>清本 CleanCode 静态代码扫描 | SAST </li>
            <li>清正 CleanBinary 二进制代码扫描</li>
            <li>车联网安全服务</li>
            <li>网络安全咨询服务</li>
          </ul>
        </section>
        <section className=" list">
          <h3>关于</h3>
          <ul>
            <li>关于我们</li>
            <li>加入我们</li>
            <li>联系我们</li>
          </ul>
        </section>
        <section className="follow">
          <h3>关注我们</h3>
          <div className="container">
            <div className="qr-code--box">
              <div className="qr-code business" />
              <p>商务合作</p>
            </div>
            <div className="qr-code--box">
              <div className="qr-code wechat" />
              <p>微信公众号</p>
            </div>
          </div>
        </section>
      </section>
      <section className="screen-center copyright">
        <p>版权所有 © 上海安势信息技术有限公司</p>
        <p>沪ICP备2021017773号</p>
        <div className="site-support">
          本网站支持 <div className="box">IPV6</div>
        </div>
      </section>
    </footer>
  )
}
