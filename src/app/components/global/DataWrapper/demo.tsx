"use client";

import { useMemo, useState } from "react";

import DataWrapper from ".";

type State = "list" | "empty" | "error";

const mockError = { message: { error: "接口超时，请稍后再试" } };

const Demo = () => {
  const [state, setState] = useState<State>("list");

  const list = useMemo(() => {
    if (state === "list") return ["苹果", "香蕉", "葡萄"];
    if (state === "empty") return [];
    return undefined;
  }, [state]);

  return (
    <div className="space-y-3">
      <div className="flex gap-2 text-sm">
        {(["list", "empty", "error"] as State[]).map((key) => (
          <button
            key={key}
            className={`rounded-full px-3 py-1 ${
              state === key ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
            }`}
            onClick={() => setState(key)}
          >
            {key === "list" ? "有数据" : key === "empty" ? "空列表" : "异常态"}
          </button>
        ))}
      </div>

      <DataWrapper list={list} error={state === "error" ? mockError : undefined}>
        <ul className="grid grid-cols-3 gap-3 text-sm">
          {list?.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </DataWrapper>
    </div>
  );
};

export default Demo;
