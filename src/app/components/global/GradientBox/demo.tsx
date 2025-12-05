"use client";

import GradientBox from ".";

const Demo = () => (
  <div className="space-y-4">
    <GradientBox className="h-[120px] rounded-xl p-4 text-white">
      <p className="text-sm uppercase tracking-[0.2em]">Default</p>
      <p className="text-lg font-semibold">主色居中渐变</p>
    </GradientBox>

    <GradientBox
      color="#6B8BFF"
      borderColor="#A5B8FF"
      top
      bottom
      className="h-[140px] rounded-xl p-4 text-white"
    >
      <p className="text-sm uppercase tracking-[0.2em]">With border lines</p>
      <p className="text-lg font-semibold">上下高光线 + 自定义色</p>
    </GradientBox>
  </div>
);

export default Demo;
