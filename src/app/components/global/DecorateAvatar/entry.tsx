import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "decorateavatar",
  title: "DecorateAvatar",
  description: "DecorateAvatar 组件展示占位",
  Demo,
  Doc,
  demoPath: "src/app/components/global/DecorateAvatar/demo.tsx",
  componentPath: "src/app/components/global/DecorateAvatar/index.tsx",
};

export default entry;
