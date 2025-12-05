"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

import BackgroundSectionAsync from ".";

const presets = {
  spring: {
    title: "春日赏味季",
    subtitle: "客单满 199 赠限定野餐包，数量有限先到先得。",
    hero:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&auto=format&fit=crop&q=80",
    ribbon:
      "https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=900&auto=format&fit=crop&q=80",
    ribbonTitle: "周末门店同享优惠",
    ribbonDesc: "凭内购码到店立减 30，支持到店扫码核销。",
  },
  neon: {
    title: "夜猫加油站",
    subtitle: "22:00 以后下单饮品享 8 折，再领 10 元运费券。",
    hero:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&auto=format&fit=crop&q=80",
    ribbon:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=900&auto=format&fit=crop&q=80",
    ribbonTitle: "深夜免配送费",
    ribbonDesc: "夜间档期使用会员专属券，满 49 免基础配送费。",
  },
} as const;

type SceneKey = keyof typeof presets;

const Demo = () => {
  const [scene, setScene] = useState<SceneKey>("spring");

  const config = useMemo(() => presets[scene], [scene]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-slate-600">
        <div className="space-y-1">
          <p className="text-base font-semibold text-slate-900">异步背景容器示例</p>
          <p>模拟营销页卡片，客户端按需加载大图与平铺纹理。</p>
        </div>
        <div className="flex gap-2">
          {(Object.keys(presets) as SceneKey[]).map((key) => (
            <Button
              key={key}
              variant={scene === key ? "primary" : "secondary"}
              size="sm"
              onClick={() => setScene(key)}
            >
              {key === "spring" ? "春日场景" : "夜间场景"}
            </Button>
          ))}
        </div>
      </div>

      <BackgroundSectionAsync
        imagePath={config.hero}
        className="h-[220px] rounded-xl shadow-sm"
        childrenClassName="flex h-full flex-col items-start justify-center gap-3 px-6"
        overlayClassName="bg-black/30"
      >
        <div className="text-lg font-semibold text-white">{config.title}</div>
        <div className="text-sm text-white/90">{config.subtitle}</div>
        <Button
          variant="secondary"
          size="sm"
          className="bg-white/90 text-slate-900 hover:bg-white"
        >
          立即参与
        </Button>
      </BackgroundSectionAsync>

      <BackgroundSectionAsync
        mode="bgRepeatX"
        imagePath={config.ribbon}
        className="h-[120px] rounded-lg"
        childrenClassName="flex h-full items-center justify-between px-6"
      >
        <div className="space-y-1">
          <div className="text-base font-semibold text-slate-900">
            {config.ribbonTitle}
          </div>
          <div className="text-xs text-slate-700">{config.ribbonDesc}</div>
        </div>
        <Button variant="ghost" size="sm">
          查看详情
        </Button>
      </BackgroundSectionAsync>
    </div>
  );
};

export default Demo;
