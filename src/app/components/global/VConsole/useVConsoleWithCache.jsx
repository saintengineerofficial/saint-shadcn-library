"use client"

import { useEffect } from "react"

import { createVConsoleCachePlugin } from "./vconsoleCachePlugin"
import { createVConsoleHeadersPlugin } from "./vconsoleHeadersPlugin"

export const useVConsoleWithCache = (options = {}) => {
  const { maxLogNumber = 1000, enableInProduction = false, defaultPlugins = ["system", "network", "element", "storage"] } = options

  useEffect(() => {
    const shouldEnable = process.env.NEXT_PUBLIC_NODE_ENV !== "production" || enableInProduction
    if (!shouldEnable) return

    let vConsoleInstance = null
    let cachePlugin = null
    let headersPlugin = null

    import("vconsole").then(mod => {
      const VConsole = mod.default || mod
      const VConsolePlugin = VConsole.VConsolePlugin
      const VConsoleCachePlugin = createVConsoleCachePlugin(VConsolePlugin)
      const VConsoleHeadersPlugin = createVConsoleHeadersPlugin(VConsolePlugin)

      cachePlugin = new VConsoleCachePlugin()
      headersPlugin = new VConsoleHeadersPlugin()

      vConsoleInstance = new VConsole({
        theme: "light",
        maxLogNumber,
        defaultPlugins,
      })

      // 添加缓存插件
      vConsoleInstance.addPlugin(cachePlugin)
      // 添加请求头插件
      vConsoleInstance.addPlugin(headersPlugin)

      // 将插件实例暴露到全局，以便XMLHttpRequest拦截器使用
      window.vConsoleHeadersPlugin = headersPlugin

      console.log("addPlugin 完成")
    }).catch(error => {
      console.error("Failed to load vConsole:", error)
    })

    return () => {
      if (vConsoleInstance) {
        try {
          if (cachePlugin) {
            vConsoleInstance.removePlugin(cachePlugin.id)
          }
          if (headersPlugin) {
            vConsoleInstance.removePlugin(headersPlugin.id)
          }
          vConsoleInstance.destroy()
          console.log("vConsole destroyed")
        } catch (error) {
          console.error("Error destroying vConsole:", error)
        }
      }
    }
  }, [maxLogNumber, enableInProduction, defaultPlugins])
}
