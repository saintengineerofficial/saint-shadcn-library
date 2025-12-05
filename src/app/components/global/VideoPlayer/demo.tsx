"use client";

import VideoPlayer from ".";

const Demo = () => (
  <div className="space-y-3">
    <p className="text-sm text-slate-700">无原生控件的视频背景，默认自动播放循环。</p>
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <VideoPlayer
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        className="h-[200px] w-full object-cover"
      />
    </div>
    <p className="text-xs text-slate-500">可用于首页循环背景、运营位视频卡片。</p>
  </div>
);

export default Demo;
