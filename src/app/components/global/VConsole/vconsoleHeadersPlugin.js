export function createVConsoleHeadersPlugin(VConsolePlugin) {
  return class VConsoleHeadersPlugin extends VConsolePlugin {
    constructor() {
      super("headers", "请求头修改")
      this.customHeaders = new Map()
      this.loadCustomHeaders()
    }

    onRenderTab(callback) {
      const addHeaderHTML = this.renderAddHeaderForm()

      callback(`
        <style>
          .vc-headers-container { padding: 16px; }
          .vc-header-form { 
            background: #fff; 
            border: 1px solid #e9ecef; 
            border-radius: 6px; 
            padding: 16px; 
          }
          .vc-header-form-row { 
            display: flex; 
            gap: 12px; 
            margin-bottom: 12px; 
            align-items: center; 
          }
          .vc-header-form-label { 
            min-width: 80px; 
            font-weight: 500; 
            color: #495057; 
          }
          .vc-header-form-input { 
            flex: 1; 
            padding: 8px 12px; 
            border: 1px solid #ced4da; 
            border-radius: 4px; 
            font-size: 14px; 
          }
          .vc-header-form-input:focus { 
            outline: none; 
            border-color: #007bff; 
            box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); 
          }
          .vc-header-form-actions { 
            display: flex; 
            gap: 8px; 
            justify-content: flex-end; 
          }
          .vc-header-form-btn { 
            padding: 8px 16px; 
            border: none; 
            border-radius: 4px; 
            font-size: 14px; 
            cursor: pointer; 
            transition: all 0.2s ease; 
          }
          .vc-header-form-btn-primary { 
            background: #28a745; 
            color: white; 
          }
          .vc-header-form-btn-primary:hover { 
            background: #218838; 
          }
          .vc-header-form-btn-secondary { 
            background: #6c757d; 
            color: white; 
          }
          .vc-header-form-btn-secondary:hover { 
            background: #5a6268; 
          }
        </style>
        <div class="vc-headers-container">
          ${addHeaderHTML}
        </div>
      `)
    }

    renderAddHeaderForm() {
      return `
        <div class="vc-header-form">
          <div class="vc-header-form-row">
            <label class="vc-header-form-label">uid:</label>
            <input type="text" class="vc-header-form-input" id="header-uid-input">
          </div>
          <div class="vc-header-form-actions">
            <button class="vc-header-form-btn vc-header-form-btn-secondary" id="clear-form-btn">清空</button>
            <button class="vc-header-form-btn vc-header-form-btn-primary" id="add-header-btn">设置</button>
          </div>
        </div>
      `
    }

    onReady() {
      this.bindEvents()
      this.interceptFetch()
      this.interceptXMLHttpRequest()
      this.autoFillCachedUid()
    }

    autoFillCachedUid() {
      const cachedUid = this.customHeaders.get("X-Uid")
      if (cachedUid) {
        const uidInput = document.getElementById("header-uid-input")
        if (uidInput) {
          uidInput.value = cachedUid
        }
      }
    }

    bindEvents() {
      const addHeaderBtn = document.getElementById("add-header-btn")
      const clearFormBtn = document.getElementById("clear-form-btn")
      const uidInput = document.getElementById("header-uid-input")

      if (addHeaderBtn) {
        addHeaderBtn.onclick = async () => {
          const uid = uidInput.value.trim()

          if (!uid || uid.length !== 7) {
            return
          }

          try {
            const res = await fetch("/api/find-user", {
              method: "POST",
              body: JSON.stringify({ uid: Number(uid) }),
            })
            const data = await res.json()

            if (data.accesstoken) {
              this.addHeader(uid, data.accesstoken)
              setTimeout(() => {
                window.location.reload()
              }, 1000)
            }
          } catch (error) {
            console.error("设置请求头失败:", error)
          }
        }
      }

      if (clearFormBtn) {
        clearFormBtn.onclick = () => {
          this.clearForm()
          // 清空后刷新页面
          setTimeout(() => {
            window.location.reload()
          }, 500)
        }
      }
    }

    addHeader(uid, token) {
      this.customHeaders.set("X-Uid", uid)
      this.customHeaders.set("X-Authorization", token)
      this.saveCustomHeaders()
      console.log(`✅ 已设置请求头: X-Uid=${uid}, X-Authorization=${token}`)
    }

    clearForm() {
      localStorage.removeItem("vconsole-custom-headers")
      const uidInput = document.getElementById("header-uid-input")
      if (uidInput) uidInput.value = ""
    }

    interceptFetch() {
      const originalFetch = window.fetch
      window.fetch = async (url, options = {}) => {
        if (this.customHeaders.size > 0) {
          options.headers = {
            ...options.headers,
            ...Object.fromEntries(this.customHeaders),
          }
        }
        return originalFetch(url, options)
      }
    }

    interceptXMLHttpRequest() {
      const originalOpen = XMLHttpRequest.prototype.open
      const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader

      XMLHttpRequest.prototype.open = function (method, url, ...args) {
        this._customHeaders = new Map()
        return originalOpen.call(this, method, url, ...args)
      }

      XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
        this._customHeaders.set(header, value)
        return originalSetRequestHeader.call(this, header, value)
      }

      const originalSend = XMLHttpRequest.prototype.send
      XMLHttpRequest.prototype.send = function (data) {
        // 应用自定义请求头
        if (window.vConsoleHeadersPlugin && window.vConsoleHeadersPlugin.customHeaders) {
          window.vConsoleHeadersPlugin.customHeaders.forEach((value, key) => {
            if (!this._customHeaders.has(key)) {
              originalSetRequestHeader.call(this, key, value)
            }
          })
        }
        return originalSend.call(this, data)
      }
    }

    loadCustomHeaders() {
      try {
        const saved = localStorage.getItem("vconsole-custom-headers")
        if (saved) {
          const parsed = JSON.parse(saved)
          this.customHeaders = new Map(Object.entries(parsed))
        }
      } catch (error) {
        console.error("Failed to load custom headers:", error)
      }
    }

    saveCustomHeaders() {
      try {
        const headersObj = Object.fromEntries(this.customHeaders)
        localStorage.setItem("vconsole-custom-headers", JSON.stringify(headersObj))
      } catch (error) {
        console.error("Failed to save custom headers:", error)
      }
    }
  }
}
