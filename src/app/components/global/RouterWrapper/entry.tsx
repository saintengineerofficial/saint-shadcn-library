import type { ComponentDemoEntry } from "@/app/components";

import Doc from "./md";
import Demo from "./demo";

const entry: ComponentDemoEntry = {
  key: "routerwrapper",
  title: "RouterWrapper",
  description: "RouterWrapper 组件展示占位(本质是对Next.js的useRouter方法的封装，可以在组件内部跳转，或者在组件外部跳转)",
  Demo,
  Doc,
  demoPath: "src/app/components/global/RouterWrapper/demo.tsx",
  componentPath: "src/app/components/global/RouterWrapper/index.tsx",
};

export default entry;
