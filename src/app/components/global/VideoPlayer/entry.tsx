import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "videoplayer",
  title: "VideoPlayer",
  description: "VideoPlayer 组件展示占位，待补充真实 demo。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/VideoPlayer/demo.tsx",
  componentPath: "src/app/components/global/VideoPlayer/index.tsx",
};

export default entry;
