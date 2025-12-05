declare module "lucide-react" {
  import * as React from "react";

  type LucideIcon = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Check: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronUp: LucideIcon;
}
