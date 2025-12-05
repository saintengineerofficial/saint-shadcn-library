import React, { PropsWithChildren, CSSProperties } from "react";

import { twMerge } from "tailwind-merge";

import { hexToRgb } from "@/lib/utils";

interface Props {
  className?: string;
  color?: string;
  borderColor?: string;
  top?: boolean;
  bottom?: boolean;
}

export const GradientBox = ({ className, color = "#FAAD14", borderColor, children, top = false, bottom = false }: PropsWithChildren<Props>) => {
  // 如果没有单独指定边框色，使用主色
  const finalBorderColor = borderColor ?? color;

  // 转换颜色为 RGB
  const rgb = color.startsWith("#") ? hexToRgb(color) : color;
  const borderRgb = finalBorderColor.startsWith("#") ? hexToRgb(finalBorderColor) : finalBorderColor;

  const style: CSSProperties = {
    "--main": color,
    "--main-rgb": rgb,
    "--border": finalBorderColor,
    "--border-rgb": borderRgb,
  } as CSSProperties;

  const GradientBoxBorder = ({ position }: { position: "top" | "bottom" }) => (
    <div
      className={twMerge(
        "absolute left-0 right-0 h-[2px]",
        "bg-[linear-gradient(90deg,rgba(var(--border-rgb),0)_0%,var(--border)_50%,rgba(var(--border-rgb),0)_100%)]",
        position === "top" ? "top-0" : "bottom-0"
      )}
    />
  );

  return (
    <div
      style={style}
      className={twMerge(
        "relative bg-[linear-gradient(90deg,rgba(var(--main-rgb),0)_0%,var(--main)_50%,rgba(var(--main-rgb),0)_100%)]",
        className
      )}
    >
      {top && <GradientBoxBorder position="top" />}
      {bottom && <GradientBoxBorder position="bottom" />}
      {children}
    </div>
  );
};

export default GradientBox;