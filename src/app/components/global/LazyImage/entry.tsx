import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "lazyimage",
  title: "LazyImage",
  description: "LazyImage 组件展示占位 ",
  Demo,
  Doc,
  demoPath: "src/app/components/global/LazyImage/demo.tsx",
  componentPath: "src/app/components/global/LazyImage/index.tsx",
};

export default entry;
