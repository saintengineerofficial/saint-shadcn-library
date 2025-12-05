import { CacheService } from "./cacheService"

export function createVConsoleCachePlugin(VConsolePlugin) {
  return class VConsoleCachePlugin extends VConsolePlugin {
    logs = []
    constructor() {
      super("cache", "缓存刷新")
      this.logs.push({ time: new Date().toLocaleTimeString("zh-CN"), message: "缓存刷新插件已加载", type: "info" })
    }
    onRenderTab(callback) {
      const categories = CacheService.getTagsByCategory()
      const categoryHTML = Object.entries(categories)
        .map(([category, tags]) => {
          const tagsHTML = tags
            .map(
              tag => `
          <button class="vc-cache-tag-btn" data-tag="${tag.name}" title="${tag.description}">
            ${tag.description}
          </button>
        `
            )
            .join("")
          return `
          <div class="vc-cache-category">
            <h4 class="vc-cache-category-title">${category}</h4>
            <div class="vc-cache-tags">
              ${tagsHTML}
            </div>
          </div>
        `
        })
        .join("")
      const logsHTML = this.logs
        .map(
          log => `
        <div class="vc-cache-log-item vc-cache-log-${log.type}">
          <span class="vc-cache-log-time">${log.time}</span>
          <span class="vc-cache-log-message">${log.message}</span>
        </div>
      `
        )
        .join("")
      callback(`
        <style>
          .vc-cache-main-btn { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; margin: 5px; transition: all 0.3s ease; }
          .vc-cache-main-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3); }
          .vc-cache-main-btn:active { transform: translateY(0); }
          .vc-cache-main-btn:disabled { background: #6c757d; cursor: not-allowed; transform: none; box-shadow: none; }
          .vc-cache-category { margin-bottom: 20px; }
          .vc-cache-category-title { font-size: 16px; color: #495057; margin: 0 0 10px 0; padding: 8px 0; border-bottom: 2px solid #e9ecef; }
          .vc-cache-tags { display: flex; flex-wrap: wrap; gap: 8px; }
          .vc-cache-tag-btn { background: #fff; color: #495057; border: 1px solid #ced4da; padding: 8px 12px; border-radius: 4px; font-size: 12px; cursor: pointer; transition: all 0.2s ease; }
          .vc-cache-tag-btn:hover { background: #e9ecef; border-color: #adb5bd; }
          .vc-cache-tag-btn:active { background: #dee2e6; transform: scale(0.98); }
          .vc-cache-logs { margin-top: 20px; padding: 10px; background: #f8f9fa; border-radius: 6px; border: 1px solid #e9ecef; max-height: 200px; overflow-y: auto; }
          .vc-cache-log-item { display: flex; align-items: flex-start; margin-bottom: 8px; font-size: 12px; line-height: 1.4; }
          .vc-cache-log-time { color: #6c757d; margin-right: 8px; min-width: 60px; font-family: monospace; }
          .vc-cache-log-message { flex: 1; }
          .vc-cache-log-success .vc-cache-log-message { color: #28a745; }
          .vc-cache-log-error .vc-cache-log-message { color: #dc3545; }
          .vc-cache-log-info .vc-cache-log-message { color: #17a2b8; }
        </style>
        <div class="vc-cache-controls">
          <button class="vc-cache-main-btn" id="refresh-all-btn">🔄 刷新全部缓存</button>
          <button class="vc-cache-main-btn" id="clear-logs-btn">🗑️ 清空日志</button>
        </div>
        <div class="vc-cache-categories">${categoryHTML}</div>
        <div class="vc-cache-logs">
          <div class="vc-cache-logs-header"><strong>操作日志</strong></div>
          <div id="cache-logs-container">${logsHTML}</div>
        </div>
      `)
    }
    onReady() {
      const refreshAllBtn = document.getElementById("refresh-all-btn")
      if (refreshAllBtn) {
        refreshAllBtn.onclick = async () => {
          refreshAllBtn.setAttribute("disabled", "true")
          refreshAllBtn.textContent = "⏳ 刷新中..."
          this.addLog("开始刷新所有缓存...", "info")
          const allTags = Object.values(CacheService.TAGS).map(tag => tag.name)
          const results = await Promise.all(
            allTags.map(async tag => {
              const res = await fetch("/api/revalidate-tag", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tag }),
              })
              const data = await res.json()
              return { tag, ...data }
            })
          )
          const successCount = results.filter(r => r.success).length
          if (successCount === allTags.length) {
            this.addLog(`✅ 所有缓存刷新成功 (${results.length}项)`, "success")
          } else {
            this.addLog(`⚠️ 部分缓存刷新成功 (${successCount}/${results.length})`, "error")
          }
          refreshAllBtn.removeAttribute("disabled")
          refreshAllBtn.textContent = "刷新缓存"
          this.updateLogs()
        }
      }
      const clearLogsBtn = document.getElementById("clear-logs-btn")
      if (clearLogsBtn) {
        clearLogsBtn.onclick = () => {
          this.logs = []
          this.addLog("日志已清空", "info")
          this.updateLogs()
        }
      }

      const tagButtons = document.querySelectorAll(".vc-cache-tag-btn")
      tagButtons.forEach(btn => {
        btn.addEventListener("click", async e => {
          const tag = e.target.dataset.tag
          if (tag) {
            const res = await fetch("/api/revalidate-tag", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ tag }),
            })
            const data = await res.json()
            this.addLog(data.message, data.success ? "success" : "error")
            this.updateLogs()
          }
        })
      })
    }
    addLog(message, type) {
      const time = new Date().toLocaleTimeString("zh-CN")
      this.logs.unshift({ time, message, type })
      if (this.logs.length > 50) {
        this.logs = this.logs.slice(0, 50)
      }
    }
    updateLogs() {
      const logContainer = document.getElementById("cache-logs-container")
      if (logContainer) {
        logContainer.innerHTML = this.logs
          .map(
            log => `
          <div class="vc-cache-log-item vc-cache-log-${log.type}">
            <span class="vc-cache-log-time">${log.time}</span>
            <span class="vc-cache-log-message">${log.message}</span>
          </div>
        `
          )
          .join("")
      }
    }
  }
}
