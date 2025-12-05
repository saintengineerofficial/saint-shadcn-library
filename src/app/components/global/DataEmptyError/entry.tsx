import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "dataemptyerror",
  title: "DataEmptyError",
  description: "DataEmptyError 组件展示占位，待补充真实 demo。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/DataEmptyError/demo.tsx",
  componentPath: "src/app/components/global/DataEmptyError/index.tsx",
};

export default entry;
