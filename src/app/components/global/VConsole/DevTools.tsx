// components/DevTools.tsx
'use client';

import { useVConsoleWithCache } from "./useVConsoleWithCache";

interface DevToolsProps {
  enableInProduction?: boolean;
  vConsoleOptions?: {
    theme?: 'light' | 'dark';
    maxLogNumber?: number;
    defaultPlugins?: string[];
  };
}

export const DevTools: React.FC<DevToolsProps> = ({
  enableInProduction = false,
  vConsoleOptions = {}
}) => {
  // 初始化带缓存功能的 vConsole
  useVConsoleWithCache({
    theme: vConsoleOptions.theme || 'dark',
    maxLogNumber: vConsoleOptions.maxLogNumber || 1000,
    defaultPlugins: vConsoleOptions.defaultPlugins || ['system', 'network', 'element', 'storage'],
    enableInProduction
  });

  // 不渲染任何 UI，所有功能都集成在 vConsole 中
  return null;
};