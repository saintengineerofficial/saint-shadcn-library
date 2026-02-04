"use client";

import TransitionShadow from ".";
import InternalImage from "../InternalImage";

const Demo = () => (
  <div className="relative gap-2 flex overflow-hidden rounded-xl">
    <InternalImage
      src="/image/reward-page-top-bg.png"
      alt="cover"
      className="h-[278px] w-[400px] object-cover"
    />
    <div className='relative'>
      <InternalImage
        src="/image/reward-page-top-bg.png"
        alt="cover"
        fill
        className="h-[278px] w-[400px] object-cover"
      />
      <TransitionShadow className='w-[400px]' />
    </div>
  </div>
);

export default Demo;
