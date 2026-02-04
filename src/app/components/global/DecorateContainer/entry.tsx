import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "decoratecontainer",
  title: "DecorateContainer",
  description: "DecorateContainer 组件展示占位",
  Demo,
  Doc,
  demoPath: "src/app/components/global/DecorateContainer/demo.tsx",
  componentPath: "src/app/components/global/DecorateContainer/index.tsx",
};

export default entry;
