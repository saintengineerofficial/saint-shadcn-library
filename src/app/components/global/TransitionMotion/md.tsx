const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>基于 framer-motion 的淡入包装组件，默认 <code>opacity 0 → 1</code>，耗时 0.5s。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li>用于页面主体/分段模块的入场动效。</li>
      <li>SSR 场景建议只包裹需要动效的区域，避免对布局高度产生影响。</li>
    </ul>
  </div>
);

export default Doc;
