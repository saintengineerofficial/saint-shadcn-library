import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "marquee",
  title: "Marquee",
  description: "Marquee 组件展示占位",
  Demo,
  Doc,
  demoPath: "src/app/components/global/Marquee/demo.tsx",
  componentPath: "src/app/components/global/Marquee/index.tsx",
};

export default entry;
