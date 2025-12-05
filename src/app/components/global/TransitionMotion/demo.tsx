"use client";

import TransitionMotion from ".";

const Demo = () => (
  <div className="space-y-3">
    <p className="text-sm text-slate-600">页面/模块淡入：进入时自动从 0 → 1 透明度。</p>
    <TransitionMotion>
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-base font-semibold text-slate-900">淡入容器</p>
        <p className="mt-2 text-sm text-slate-600">
          将页面主体包一层，实现首屏渐显。可结合路由切换或列表过滤使用。
        </p>
      </div>
    </TransitionMotion>
  </div>
);

export default Demo;
