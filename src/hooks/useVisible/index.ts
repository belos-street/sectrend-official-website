import { RefObject, useEffect, useState } from 'react'

export function useVisible(ref: RefObject<Element>) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting !== isVisible && setIsVisible(entry.isIntersecting)
    })

    const dom = ref.current
    if (!dom) return
    observer.observe(dom)

    // 清理函数：当组件卸载时，移除对元素的观察
    return () => {
      observer.unobserve(dom)
    }
  }, [ref, isVisible])

  return {
    isVisible
  }
}
