import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "grid",
  title: "Grid",
  description: "Grid 组件展示占位，待补充真实 demo。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/Grid/demo.tsx",
  componentPath: "src/app/components/global/Grid/grid.tsx",
};

export default entry;
