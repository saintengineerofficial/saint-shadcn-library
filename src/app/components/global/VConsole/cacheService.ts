export interface CacheTag {
  name: string
  description: string
  category?: string
}

export class CacheService {
  // 预定义的缓存标签
  static readonly TAGS: Record<string, CacheTag> = {
    TRANSLATIONS: { name: "translations", description: "翻译", category: "活动" },
    ACT_CONFIG: { name: "act-config", description: "活动配置", category: "活动" },
    ACT_REWARD_CONFIG: { name: "act-reward-config", description: "活动奖励配置", category: "活动" },
  }

  // 获取所有可用的缓存标签
  static getAllTags(): CacheTag[] {
    return Object.values(this.TAGS)
  }

  // 按分类获取标签
  static getTagsByCategory(): Record<string, CacheTag[]> {
    const categories: Record<string, CacheTag[]> = {}

    Object.values(this.TAGS).forEach(tag => {
      const category = tag.category || "其他"
      if (!categories[category]) {
        categories[category] = []
      }
      categories[category].push(tag)
    })

    return categories
  }
}
