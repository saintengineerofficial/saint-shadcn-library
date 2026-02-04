import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "svgavideo",
  title: "SvgaVideo",
  description: "svga npm包，SvgaVideo 组件展示占位",
  Demo,
  Doc,
  demoPath: "src/app/components/global/SvgaVideo/demo.tsx",
  componentPath: "src/app/components/global/SvgaVideo/index.tsx",
};

export default entry;
