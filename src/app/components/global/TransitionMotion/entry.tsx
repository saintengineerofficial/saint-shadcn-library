import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "transitionmotion",
  title: "TransitionMotion",
  description: "TransitionMotion 组件展示占位，待补充真实 demo。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/TransitionMotion/demo.tsx",
  componentPath: "src/app/components/global/TransitionMotion/index.tsx",
};

export default entry;
