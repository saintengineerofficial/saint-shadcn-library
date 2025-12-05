import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "basedialog",
  title: "BaseDialog",
  description: "基于 Radix Dialog 的业务弹窗封装。",
  Demo,
  Doc,
  demoPath: "src/app/components/global/BaseDialog/demo.tsx",
  componentPath: "src/app/components/global/BaseDialog/index.tsx",
};

export default entry;
