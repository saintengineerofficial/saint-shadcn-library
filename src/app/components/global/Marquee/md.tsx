const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>水平循环滚动容器，通过重复子元素实现无缝跑马灯效果。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>wrapperClassName</code>: 外层容器样式（遮罩与溢出隐藏已内置）。</li>
      <li><code>animationClassName</code>: 动画层样式，可自定义速度与间距。</li>
      <li>子元素建议使用 <code>flex-none</code> 或 <code>shrink-0</code>，保证宽度不被压缩。</li>
    </ul>
  </div>
);

export default Doc;
