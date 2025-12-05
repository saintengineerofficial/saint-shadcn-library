"use client";

import { useState } from "react";

import SafeLink from ".";

const Demo = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="space-y-3 text-sm text-slate-700">
      <div className="flex items-center gap-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
          禁用跳转
        </label>
      </div>

      <SafeLink href="/#safe-link-demo" disabled={disabled}>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${
            disabled ? "bg-slate-100 text-slate-400" : "bg-slate-900 text-white"
          }`}
        >
          {disabled ? "已禁用" : "点我跳转"}（阻止默认跳转以防误触）
        </span>
      </SafeLink>
      <p>适合分享卡片、占位 Banner，需控场时可关闭跳转。</p>
    </div>
  );
};

export default Demo;
