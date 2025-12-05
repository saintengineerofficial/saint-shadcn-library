const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>简单的尺寸占位器，透传 tailwind 宽高类名，保持容器结构整洁。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>w</code> / <code>h</code>: tailwind 宽高类，如 <code>w-[120px]</code>、<code>h-10</code>。</li>
      <li>常用于骨架、动画占位，或将子元素限制在固定尺寸内。</li>
    </ul>
  </div>
);

export default Doc;
