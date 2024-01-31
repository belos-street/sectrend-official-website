import { RefObject, useEffect, useState } from 'react'

/** 监听dom元素是否被hover */
export function useHover(domRef: RefObject<HTMLElement>) {
  const [isHovered, setIsHovered] = useState(false)
  // 当组件挂载时，添加事件监听器
  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    if (!domRef) return
    const dom = domRef.current!

    // 添加事件监听器到某个DOM元素
    dom.addEventListener('mouseenter', handleMouseEnter)
    dom.addEventListener('mouseleave', handleMouseLeave)

    // 在组件卸载时移除事件监听器
    return () => {
      dom.removeEventListener('mouseenter', handleMouseEnter)
      dom.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [domRef])

  return { isHovered }
}
