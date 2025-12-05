import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "vconsole",
  title: "VConsole",
  description: "VConsole 调试相关封装，占位展示。",
  Demo,
  Doc,
};

export default entry;
