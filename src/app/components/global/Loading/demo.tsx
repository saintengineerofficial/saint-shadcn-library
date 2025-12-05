"use client";

import { useEffect, useState } from "react";

import LoadingWrapper from ".";

const Demo = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-2">
      <p className="text-sm text-slate-600">加载时展示动效，结束后显示真实内容。</p>
      <LoadingWrapper isLoading={isLoading} className="min-h-[220px] rounded-lg border border-slate-200 bg-white">
        <div className="p-4 text-sm text-slate-800">
          <p className="text-base font-semibold">内容已加载</p>
          <p className="mt-2 text-slate-600">
            这里可以放列表/图表等主内容，LoadingWrapper 会占位保持高度。
          </p>
        </div>
      </LoadingWrapper>
    </div>
  );
};

export default Demo;
