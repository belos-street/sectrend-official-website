import { useEffect, useState } from 'react'
import { throttle } from 'lodash'
type TabPosition = 'top' | 'left'
const changeDeviceWidth = 1000 //当浏览器宽度低于1000px，切换mobile排版
export function useTabsPosition() {
  const [position, setPosition] = useState<TabPosition>('top') // 默认值为纵向排版

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth >= changeDeviceWidth) {
        setPosition('top')
      } else {
        setPosition('left')
      }
      console.log(new Date())
    }

    window.addEventListener('resize', throttle(handleResize, 1000)) // 监听窗口大小变化
    handleResize() // 初始化时调用一次

    return () => {
      window.removeEventListener('resize', handleResize) // 组件卸载时移除事件监听器
    }
  }, []) // 只在组件挂载和卸载时执行

  return { position }
}
