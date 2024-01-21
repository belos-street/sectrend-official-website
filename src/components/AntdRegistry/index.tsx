'use client'

import React from 'react'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import type Entity from '@ant-design/cssinjs/es/Cache'
import { useServerInsertedHTML } from 'next/navigation'

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren<any>) => {
  const cache = React.useMemo<Entity>(() => createCache(), [])
  const isServerInserted = React.useRef<boolean>(false)
  useServerInsertedHTML(() => {
    if (isServerInserted.current) return // 避免 css 重复插入
    isServerInserted.current = true
    return <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  })
  return <StyleProvider cache={cache}>{children}</StyleProvider>
}

export default StyledComponentsRegistry
