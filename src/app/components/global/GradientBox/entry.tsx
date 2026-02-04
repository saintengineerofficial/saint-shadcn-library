import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "gradientbox",
  title: "GradientBox",
  description: "GradientBox 组件展示占位",
  Demo,
  Doc,
  demoPath: "src/app/components/global/GradientBox/demo.tsx",
  componentPath: "src/app/components/global/GradientBox/index.tsx",
};

export default entry;
