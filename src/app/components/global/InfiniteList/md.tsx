const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>基于 IntersectionObserver 的列表触底加载器，观察尾部元素自动触发 <code>loadMore</code>。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>hasMore</code>: 是否还有下一页，false 时不再触发且不展示 spinner。</li>
      <li><code>loadMore</code>: 必须返回 Promise，内部加锁防止并发触发。</li>
      <li><code>footer</code>: 自定义尾部内容，可替换默认的 loading 图标。</li>
    </ul>
  </div>
);

export default Doc;
