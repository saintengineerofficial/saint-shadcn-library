const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>客户端按需加载的背景容器，内部使用 <code>dynamic</code> 禁用 SSR，适合首屏避免图片闪烁。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li>透传 <code>BackgroundSection</code> 的 props：<code>imagePath</code>、<code>mode</code>、<code>className</code> 等。</li>
      <li>营销、活动页大图可放在此，确保仅在浏览器侧渲染。</li>
    </ul>
  </div>
);

export default Doc;
