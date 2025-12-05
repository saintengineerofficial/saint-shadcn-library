"use client";

import { useCallback, useState } from "react";

import InfiniteList from ".";

const Demo = () => {
  const [items, setItems] = useState(Array.from({ length: 8 }, (_, i) => i + 1));
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setItems((prev) => {
      const next = prev.length >= 18 ? prev : [...prev, ...Array.from({ length: 6 }, (_, i) => prev.length + i + 1)];
      if (next.length >= 18) setHasMore(false);
      return next;
    });
  }, []);

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-600">向下滚动至底部触发 loadMore，加载两页后停止。</p>
      <div className="h-[260px] overflow-auto rounded-lg border border-slate-200 p-3">
        <InfiniteList hasMore={hasMore} loadMore={loadMore}>
          <div className="grid grid-cols-3 gap-3">
            {items.map((num) => (
              <div
                key={num}
                className="flex h-[80px] items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-800"
              >
                卡片 {num}
              </div>
            ))}
          </div>
        </InfiniteList>
      </div>
    </div>
  );
};

export default Demo;
