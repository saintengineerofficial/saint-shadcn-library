"use client";

import { useState } from "react";

import DataEmptyError from ".";

const Demo = () => {
  const [mode, setMode] = useState<"empty" | "error">("empty");

  const data = mode === "empty" ? [] : undefined;
  const error = mode === "error" ? { message: { error: "网络异常，请检查连接" } } : undefined;

  return (
    <div className="space-y-3 text-sm text-slate-700">
      <div className="flex gap-2">
        <button
          className={`rounded-full px-3 py-1 ${mode === "empty" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          onClick={() => setMode("empty")}
        >
          空态
        </button>
        <button
          className={`rounded-full px-3 py-1 ${mode === "error" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"}`}
          onClick={() => setMode("error")}
        >
          错误态
        </button>
      </div>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-900/80">
        <DataEmptyError data={data} error={error} className="h-[260px]" />
      </div>
    </div>
  );
};

export default Demo;
