"use client";

import TransitionShadow from ".";

const Demo = () => (
  <div className="relative h-[200px] overflow-hidden rounded-xl">
    <img
      src="https://images.unsplash.com/photo-1466840884200-57d479ae4b4c?w=1200&q=80&auto=format&fit=crop"
      alt="cover"
      className="h-full w-full object-cover"
    />
    <TransitionShadow />
    <div className="absolute left-4 top-4 space-y-2 text-white">
      <p className="text-xs uppercase tracking-[0.2em]">Podcast</p>
      <p className="text-lg font-semibold">夏日路途播放清单</p>
    </div>
  </div>
);

export default Demo;
