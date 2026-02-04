"use client";

import React from "react";
import LazyImage from ".";

const Demo = () => {
  const scrollRootRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="p-4">
      <p className="mb-2 text-sm text-slate-700">
        ✅ 懒加载演示：请向下滚动，图片进入视口才从占位图切换为真实图片。
      </p>

      <div
        ref={scrollRootRef}
        className="h-[160px] overflow-y-auto rounded-md border p-3 space-y-3"
      >
        {/* 大量内容把图片挤到下面 */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-[60px] rounded bg-slate-100 flex items-center px-3 text-sm text-slate-600"
          >
            占位内容 {i + 1}
          </div>
        ))}

        <div className="py-2">
          <div className="text-xs text-slate-500 mb-2">
            👇 图片即将进入视口（进入后才加载真实 src）
          </div>

          <LazyImage src="/image/tab.png" alt="lazy" root={scrollRootRef} className="items-end w-[422px] h-[82px]" />
        </div>
      </div>
    </div>
  );
}
export default Demo;
