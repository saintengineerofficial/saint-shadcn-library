"use client";

import BaseImage from ".";

const Demo = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <p className="text-sm text-slate-700">填充父容器，保持比例。</p>
      <BaseImage
        src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=900&auto=format&fit=crop&q=80"
        alt="mountain"
        className="h-[140px] w-full overflow-hidden rounded-lg border border-slate-200"
      />
    </div>
    <div className="space-y-2">
      <p className="text-sm text-slate-700">自定义圆角与背景。</p>
      <BaseImage
        src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&auto=format&fit=crop&q=80"
        alt="night"
        className="h-[140px] w-full overflow-hidden rounded-full border border-slate-200 bg-slate-50"
      />
    </div>
  </div>
);

export default Demo;
