const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>基于 <code>IntersectionObserver</code> 的图片懒加载包装，提供 base64 占位图，避免提前请求。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>lazy</code>: 开启懒加载；进入视口前用 <code>loading</code> 占位。</li>
      <li><code>loading</code>: 占位图地址，默认透明 1x1 gif。</li>
      <li>其它 props 透传给 <code>next/image</code>，保持 fill + object-contain 样式。</li>
    </ul>
  </div>
);

export default Doc;
