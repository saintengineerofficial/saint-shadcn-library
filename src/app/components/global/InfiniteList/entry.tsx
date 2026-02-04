import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "infinitelist",
  title: "InfiniteList",
  description: "InfiniteList 组件展示占位",
  Demo,
  Doc,
  demoPath: "src/app/components/global/InfiniteList/demo.tsx",
  componentPath: "src/app/components/global/InfiniteList/index.tsx",
};

export default entry;
