import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "internalimage",
  title: "InternalImage",
  description: "InternalImage 组件展示占位，待补充真实 demo。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/InternalImage/demo.tsx",
  componentPath: "src/app/components/global/InternalImage/index.tsx",
};

export default entry;
