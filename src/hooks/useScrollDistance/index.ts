import { debounce } from 'lodash'
import { useEffect, useState } from 'react'

/**
 * 获取滚动条离顶部距离
 */
export function useScrollDistance() {
  const [scrollDistance, setScrollDistance] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollDistance(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', debounce(handleScroll, 200))
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return { scrollDistance, setScrollDistance }
}
