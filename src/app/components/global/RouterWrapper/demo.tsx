"use client";

import RouterWrapper from ".";

const Demo = () => (
  <div className="space-y-3 text-sm text-slate-700">
    <p>点击不同按钮触发 push/replace/back，常用于卡片、列表项包裹。</p>
    <div className="flex gap-3">
      <RouterWrapper link="/?from=router-wrapper" className="rounded-lg bg-slate-900 px-4 py-2 text-white">
        push 到 query
      </RouterWrapper>
      <RouterWrapper link="/?from=router-wrapper" replace className="rounded-lg bg-slate-100 px-4 py-2 text-slate-900">
        replace 当前页
      </RouterWrapper>
      <RouterWrapper back className="rounded-lg bg-slate-200 px-4 py-2 text-slate-900">
        返回上一页
      </RouterWrapper>
    </div>
    <p className="text-xs text-slate-500">
      组件内部会预取 link，<code>onClick</code> 返回 false 时可阻止跳转，例如校验登录。
    </p>
  </div>
);

export default Demo;
