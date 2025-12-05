"use client";

import Tabs from ".";

const Demo = () => (
  <div className="space-y-3">
    <p className="text-sm text-slate-700">左右拖拽或点击切换内容，移动端友好。</p>
    <Tabs>
      <Tabs.Content index={0}>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-base font-semibold text-slate-900">热门推荐</p>
          <p className="mt-2 text-sm text-slate-600">手指左右滑动可切换到“折扣专区”。</p>
        </div>
      </Tabs.Content>
      <Tabs.Content index={1}>
        <div className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-base font-semibold text-slate-900">折扣专区</p>
          <p className="mt-2 text-sm text-slate-600">当前 tab 由滑动触发，模拟商品二级导航。</p>
        </div>
      </Tabs.Content>
    </Tabs>
  </div>
);

export default Demo;
