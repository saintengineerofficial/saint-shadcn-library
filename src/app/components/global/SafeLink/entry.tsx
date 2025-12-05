import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "safelink",
  title: "SafeLink",
  description: "SafeLink 组件展示占位，待补充真实 demo。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/SafeLink/demo.tsx",
  componentPath: "src/app/components/global/SafeLink/index.tsx",
};

export default entry;
