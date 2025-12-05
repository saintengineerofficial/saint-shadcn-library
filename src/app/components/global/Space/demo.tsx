"use client";

import Space from ".";

const Demo = () => (
  <div className="space-y-3 text-sm text-slate-700">
    <p>宽高占位组件：在可视区域内占格或为动画预留空间。</p>
    <div className="flex items-center gap-3">
      <div className="rounded-lg bg-slate-100 p-3">
        <Space w="w-[120px]" h="h-[60px]">
          <div className="flex h-full w-full items-center justify-center rounded-md bg-slate-300 text-xs">
            120 x 60
          </div>
        </Space>
      </div>
      <div className="rounded-lg bg-slate-100 p-3">
        <Space w="w-[80px]" h="h-[80px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-300 text-xs">
            80 x 80
          </div>
        </Space>
      </div>
    </div>
  </div>
);

export default Demo;
