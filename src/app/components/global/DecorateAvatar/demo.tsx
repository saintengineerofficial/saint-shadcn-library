"use client";

import DecorateAvatar from ".";
import BackgroundSection from "../BackgroundSection";

const Demo = () => (
  <div className="space-y-7">
    <DecorateAvatar
      avatarUrl='/image/human.png'
      backgroundImagePath='/image/banner-avatar-left.png'
      backgroundClassName='w-[245px] h-[238px]'
      avatarClassName='size-[143px] top-[40px]'
      decorateAvatarClassName='w-[245px] h-[238px]'
    >
      <BackgroundSection imagePath='/image/banner-avatar-left-title.png' className='w-[218px] h-[65px] absolute bottom-[-10px] left-1/2 -translate-x-1/2'>
        <span className='text-[#FFFFFF] text-[24px] text-center  truncate w-[140px]'>
          nickname
        </span>
      </BackgroundSection>
    </DecorateAvatar>
    <p className="text-xs text-slate-500">外层容器需设置 <code>relative</code> 与固定尺寸，头像默认绝对定位在顶部。</p>
  </div>
);

export default Demo;
