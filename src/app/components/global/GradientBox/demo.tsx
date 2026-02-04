"use client";

import GradientBox from ".";

const Demo = () => (
  <div className="space-y-4">
    <GradientBox className="h-[120px] rounded-xl p-4 text-white text-center">
      <p className="text-sm uppercase tracking-[0.2em]">Default</p>
      <p className="text-lg font-semibold">主色居中渐变</p>
    </GradientBox>
  </div>
);

export default Demo;
