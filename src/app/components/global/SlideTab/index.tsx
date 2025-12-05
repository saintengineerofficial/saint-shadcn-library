"use client"

import React, { useState, useRef, ReactNode, PropsWithChildren } from "react"

interface TabContentProps {
  index: number
}
interface TabsProps {
  children: ReactNode
  initialTabIndex?: number
}

const Tabs = ({ children, initialTabIndex = 0 }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(initialTabIndex)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  // 获取 tab 数量
  const tabCount = React.Children.toArray(children).filter(
    (child: any) => child.type === TabContent
  ).length

  // 切换 tab 的函数
  const switchTab = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= tabCount) return
    if (newIndex === activeTab) return
    setActiveTab(newIndex)
  }

  // 开始拖拽
  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setCurrentX(clientX)
  }

  // 拖拽中
  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    setCurrentX(clientX)
    const offset = clientX - startX
    setDragOffset(offset)
  }

  // 结束拖拽
  const handleDragEnd = () => {
    if (!isDragging) return

    const offset = currentX - startX
    const threshold = 50 // 滑动阈值（像素）

    // 向左滑动，切换到下一个 tab
    if (offset < -threshold && activeTab < tabCount - 1) {
      switchTab(activeTab + 1)
    }
    // 向右滑动，切换到上一个 tab
    else if (offset > threshold && activeTab > 0) {
      switchTab(activeTab - 1)
    }

    // 重置状态
    setIsDragging(false)
    setDragOffset(0)
    setStartX(0)
    setCurrentX(0)
  }

  // 鼠标事件
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd()
    }
  }

  // 触摸事件
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  // 计算最终的偏移量
  const totalOffset = -activeTab * 100 + (isDragging ? (dragOffset / (contentRef.current?.offsetWidth || 1)) * 100 : 0)

  return (
    <div className="tabs-container w-full max-w-2xl mx-auto">
      <div
        ref={contentRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(${totalOffset}%)`,
            transition: isDragging ? "none" : "transform 0.3s ease",
          }}
        >
          {React.Children.map(children, (child: any, index) => {
            if (child.type === TabContent) {
              return (
                <div
                  key={index}
                  className="tab-content-item flex-shrink-0"
                  style={{
                    width: "100%",
                  }}
                >
                  {child.props.children}
                </div>
              )
            }
            return null
          })}
        </div>
      </div>


    </div>
  )
}

const TabContent = ({ children }: PropsWithChildren<TabContentProps>) => {
  return <div className="tab-content">{children}</div>
}

Tabs.Content = TabContent

export default Tabs

