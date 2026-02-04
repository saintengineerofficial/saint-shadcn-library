const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>带装饰背景的头像容器，头像绝对定位在顶部，背景可选。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>avatarUrl</code> / <code>avatarClassName</code>: 头像资源与样式。</li>
      <li><code>backgroundImagePath</code> / <code>backgroundClassName</code>: 背景图与布局样式。</li>
      <li><code>decorateAvatarClassName</code>: 外层容器样式，通常需要 <code>relative</code> 与固定尺寸。</li>
    </ul>
  </div>
);

export default Doc;
