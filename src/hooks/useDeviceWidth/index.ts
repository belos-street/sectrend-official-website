'use client'

import { useState, useEffect } from 'react'

export function useDeviceWidth() {
  const [windowWidth, setWindowWidth] = useState(0)

  // next中需要在客户端上拿window对象
  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    // 监听窗口宽度变化
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    // 组件卸载时移除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  return { windowWidth }
}
