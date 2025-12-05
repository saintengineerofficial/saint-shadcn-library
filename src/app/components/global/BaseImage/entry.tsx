import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "baseimage",
  title: "BaseImage",
  description: "BaseImage 组件展示占位，待补充真实 demo。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/BaseImage/demo.tsx",
  componentPath: "src/app/components/global/BaseImage/index.tsx",
};

export default entry;
