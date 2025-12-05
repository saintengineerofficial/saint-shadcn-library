"use client";

import InternalImage from ".";

const Demo = () => (
  <div className="grid grid-cols-2 gap-6">
    <div className="space-y-2">
      <p className="text-sm text-slate-700">指定资源：等比缩放，填充容器。</p>
      <InternalImage
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80"
        alt="咖啡"
        className="h-[140px] w-full overflow-hidden rounded-lg border border-slate-200"
      />
    </div>
    <div className="space-y-2">
      <p className="text-sm text-slate-700">无 src：展示透明占位 base64。</p>
      <InternalImage className="h-[140px] w-full rounded-lg border border-dashed border-slate-300 bg-slate-50" />
    </div>
  </div>
);

export default Demo;
