import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "spacing",
  title: "Spacing",
  description: "Spacing 组件展示占位(主要在阿语环境,rtl造成pl、pr等边距左右样式方向不一致，所以要主动展位)",
  Demo,
  Doc,
  demoPath: "src/app/components/global/Spacing/demo.tsx",
  componentPath: "src/app/components/global/Spacing/index.tsx",
};

export default entry;
