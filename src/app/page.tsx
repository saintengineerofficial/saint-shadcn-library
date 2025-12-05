"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { componentDemos } from "./components";

type CodeMap = Record<string, string | undefined>;

const CodeBlock = ({ title, code, loading }: { title: string; code?: string; loading?: boolean }) => (
  <div className="space-y-2">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{title}</p>
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <pre className="max-h-[420px] overflow-auto bg-slate-900 p-4 text-xs leading-5 text-slate-50">
        <code>{loading ? "加载中…" : code || "未找到代码"}</code>
      </pre>
    </div>
  </div>
);

export default function Home() {
  const [activeKey, setActiveKey] = useState(componentDemos[0]?.key ?? "");
  const [codeMap, setCodeMap] = useState<CodeMap>({});
  const [loadingPaths, setLoadingPaths] = useState<Record<string, boolean>>({});
  const [codeTab, setCodeTab] = useState<"demo" | "component">("demo");
  const current = componentDemos.find((item) => item.key === activeKey) ?? componentDemos[0];

  const pathsToLoad = useMemo(
    () => [current?.demoPath, current?.componentPath].filter(Boolean) as string[],
    [current?.componentPath, current?.demoPath],
  );

  useEffect(() => {
    pathsToLoad.forEach((p) => {
      if (!p || codeMap[p]) return;
      setLoadingPaths((prev) => ({ ...prev, [p]: true }));
      fetch(`/api/code?path=${encodeURIComponent(p)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.code) {
            setCodeMap((prev) => ({ ...prev, [p]: data.code }));
          } else {
            setCodeMap((prev) => ({ ...prev, [p]: "加载失败" }));
          }
        })
        .catch(() => setCodeMap((prev) => ({ ...prev, [p]: "加载失败" })))
        .finally(() => setLoadingPaths((prev) => ({ ...prev, [p]: false })));
    });
  }, [codeMap, pathsToLoad]);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <aside className="sticky top-0 flex h-screen w-72 flex-col gap-1 border-r border-slate-200 bg-white p-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold uppercase tracking-[0.2em] text-black">Saint Component List</span>
        </div>
        <div className="mt-6 space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto pr-1">
          {componentDemos.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveKey(item.key)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium ${activeKey === item.key
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-700 hover:bg-slate-100"
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Preview</p>
            <h1 className="text-3xl font-semibold text-slate-900">{current?.title}</h1>
            <p className="text-slate-600">{current?.description}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            {current ? <current.Demo /> : null}
            {current?.Doc ? (
              <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-4">
                <current.Doc />
              </div>
            ) : null}
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-slate-100 p-1 text-sm">
                <button
                  className={`rounded-full px-3 py-1 ${codeTab === "demo" ? "bg-white shadow text-slate-900" : "text-slate-600"}`}
                  onClick={() => setCodeTab("demo")}
                >
                  Demo 代码
                </button>
                <button
                  className={`rounded-full px-3 py-1 ${codeTab === "component" ? "bg-white shadow text-slate-900" : "text-slate-600"}`}
                  onClick={() => setCodeTab("component")}
                >
                  Component 代码
                </button>
              </div>
              {codeTab === "demo" ? (
                <CodeBlock
                  title="Demo 代码"
                  code={current?.demoPath ? codeMap[current.demoPath] : undefined}
                  loading={current?.demoPath ? loadingPaths[current.demoPath] : false}
                />
              ) : (
                <CodeBlock
                  title="组件代码"
                  code={current?.componentPath ? codeMap[current.componentPath] : undefined}
                  loading={current?.componentPath ? loadingPaths[current.componentPath] : false}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
