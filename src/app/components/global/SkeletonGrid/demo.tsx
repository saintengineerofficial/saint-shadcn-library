"use client";

import SkeletonGrid from ".";

const Demo = () => (
  <div className="space-y-3">
    <p className="text-sm text-slate-600">加载列表时的骨架屏示例，支持行列与尺寸自定义。</p>
    <SkeletonGrid rows={2} columns={3} cardClassName="h-[120px]" />
    <SkeletonGrid
      rows={1}
      columns={2}
      cardClassName="h-[80px] rounded-md"
      containerClassName="bg-slate-50 p-4 rounded-lg border border-slate-200"
    />
  </div>
);

export default Demo;
