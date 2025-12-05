import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isNumber = function (value: unknown): value is number {
  const opt = Object.prototype.toString;
  return value instanceof Number || opt.call(value) === "[object Number]";
};

export const px2vw = (px: number | string | undefined, viewportWidth = 750): string => {
  if (isNumber(px)) return `${pxToVw(Number(px), viewportWidth)}vw`;
  if (!String(px).includes("px")) return px as string;
  const val = Number(String(px).replace("px", ""));
  return `${pxToVw(val, viewportWidth)}vw`;
};

export const pxToVw = (px: number, viewportWidth = 750): number => {
  return Number(((px / viewportWidth) * 100).toFixed(3));
};

export const getCssBackgroundImage = (backgroundImage: string) => {
  return `url(${backgroundImage})`;
};

export const getCssWHNumber = (type: "w" | "h", className: string) => {
  const match = className.match(new RegExp(`${type}-\\[(\\d+)px\\]`));
  return match ? Number(match[1]) : 0;
};

export const extractPxClassName = (className: string, prefix: string): string => {
  const regex = new RegExp(`${prefix}-\\[\\d+px\\]`);
  const match = className.match(regex);
  return match ? match[0] : "";
};

export const hexToRgb = (hex: string) => {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
};
