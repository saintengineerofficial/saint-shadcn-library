"use client";

import Marquee from ".";

const items = ["Design", "Research", "Product", "Growth", "Strategy", "Brand", "Ops", "Support"];

const Demo = () => (
  <div className="space-y-3">
    <Marquee wrapperClassName="rounded-xl border border-slate-200 bg-white py-3" animationClassName="[animation-duration:24s]">
      {items.map((item) => (
        <span
          key={item}
          className="flex-none rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700"
        >
          {item}
        </span>
      ))}
    </Marquee>
    <p className="text-xs text-slate-500">子元素建议加 <code>flex-none</code> 或 <code>shrink-0</code>，避免被压缩。</p>
  </div>
);

export default Demo;
