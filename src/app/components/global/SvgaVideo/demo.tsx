"use client";

import { useRef, useState } from "react";

import SvgaVideo, { type SvgaVideoRef } from ".";

const Demo = () => {
  const ref = useRef<SvgaVideoRef>(null);
  const [ready, setReady] = useState(false);

  return (
    <div className="space-y-3 text-sm text-slate-700">
      <p>播放 SVGA 动效：加载完成后点击“播放一遍”。</p>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
        <SvgaVideo
          ref={ref}
          url="https://cdn.jsdelivr.net/gh/yyued/SVGA-Samples@master/angel.svga"
          className="h-[220px] w-full"
          options={{ loop: 0 }}
          onReady={() => setReady(true)}
        />
      </div>
      <button
        className="rounded-full bg-slate-900 px-4 py-1 text-white disabled:bg-slate-200"
        disabled={!ready}
        onClick={() => ref.current?.play()}
      >
        {ready ? "播放一遍" : "加载中..."}
      </button>
      <p className="text-xs text-slate-500">
        组件内部使用 DB 缓存 + IntersectionObserver，可复用在列表或首页动画。
      </p>
    </div>
  );
};

export default Demo;
