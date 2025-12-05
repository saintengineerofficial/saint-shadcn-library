"use server"
import { revalidateTag } from "next/cache"

import { CacheService as ClientCacheService } from "./cacheService"

export class CacheService {
  static readonly TAGS = ClientCacheService.TAGS

  static async revalidateSingleTag(tag: string): Promise<{ success: boolean; message: string; timestamp: string }> {
    const timestamp = new Date().toLocaleString("zh-CN")
    try {
      revalidateTag(tag)
      const message = `✅ 缓存刷新成功: ${tag}`
      console.log(`[Cache Refresh] ${message} - ${timestamp}`)
      return { success: true, message, timestamp }
    } catch (error) {
      const message = `❌ 缓存刷新失败: ${tag} - ${error}`
      console.error(`[Cache Refresh] ${message}`, error)
      return { success: false, message, timestamp }
    }
  }

  static async revalidateMultipleTags(tags: string[]): Promise<{ success: boolean; results: any[]; timestamp: string }> {
    const timestamp = new Date().toLocaleString("zh-CN")
    try {
      const results = await Promise.allSettled(
        tags.map(async tag => {
          const result = await this.revalidateSingleTag(tag)
          return { tag, ...result }
        })
      )
      const successCount = results.filter(r => r.status === "fulfilled" && r.value.success).length
      const message = `批量刷新完成: ${successCount}/${tags.length} 成功`
      console.log(`[Cache Refresh] ${message} - ${timestamp}`)
      return {
        success: successCount === tags.length,
        results: results.map(r => (r.status === "fulfilled" ? r.value : { success: false, error: r.reason })),
        timestamp,
      }
    } catch (error) {
      console.error("[Cache Refresh] 批量刷新失败:", error)
      return { success: false, results: [], timestamp }
    }
  }

  static async revalidateAll(): Promise<{ success: boolean; results: any[]; timestamp: string }> {
    const allTags = Object.values(this.TAGS).map(tag => tag.name)
    return this.revalidateMultipleTags(allTags)
  }
}
