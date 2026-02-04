"use client";

import InternalImage from ".";

const Demo = () => (
  <div className="grid grid-cols-2 gap-6">
    <div className="space-y-2">
      <p className="text-sm text-slate-700">指定资源：等比缩放，填充容器。</p>
      <InternalImage
        src="/image/bless-icon.png"
        alt="bless"
        className="size-[85px]"
      />
    </div>
    <div className="space-y-2">
      <p className="text-sm text-slate-700">无 src：展示透明占位 base64。</p>
      <InternalImage className="size-[85px] rounded-lg border border-dashed border-slate-300 bg-slate-50" />
    </div>
  </div>
);

export default Demo;
