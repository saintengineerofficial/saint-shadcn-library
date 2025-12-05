import type { ComponentDemoEntry } from "@/app/components";

import BackgroundSectionMd from "./md";
import { BackgroundSectionDemo } from "./demo";

const entry: ComponentDemoEntry = {
  key: "background",
  title: "BackgroundSection",
  description: "背景包裹组件，支持 fill 与平铺模式，便于活动页视觉容器。",
  Demo: BackgroundSectionDemo,
  Doc: BackgroundSectionMd,
  demoPath: "src/app/components/global/BackgroundSection/demo.tsx",
  componentPath: "src/app/components/global/BackgroundSection/index.tsx",
};

export default entry;
