import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "videoplayer",
  title: "VideoPlayer",
  description: "VideoPlayer 组件展示占位(默认video出现播放按钮、控制栏等控制元素，所以需要隐藏)",
  Demo,
  Doc,
  demoPath: "src/app/components/global/VideoPlayer/demo.tsx",
  componentPath: "src/app/components/global/VideoPlayer/index.tsx",
};

export default entry;
