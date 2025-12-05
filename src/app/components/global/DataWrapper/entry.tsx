import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "datawrapper",
  title: "DataWrapper",
  description: "DataWrapper 组件展示占位，待补充真实 demo。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/DataWrapper/demo.tsx",
  componentPath: "src/app/components/global/DataWrapper/index.tsx",
};

export default entry;
