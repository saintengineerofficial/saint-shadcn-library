import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "space",
  title: "Space",
  description: "Space 组件展示占位，待补充真实 demo。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/Space/demo.tsx",
  componentPath: "src/app/components/global/Space/index.tsx",
};

export default entry;
