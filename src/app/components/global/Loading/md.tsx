const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>带渐变条形动效的 Loading 组件，以及占位包装 <code>LoadingWrapper</code>。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>isLoading</code>: true 时渲染动画并占位，false 时展示 children。</li>
      <li>默认高度 500px，可传 <code>className</code> 控制占位尺寸。</li>
      <li>Loading 本体可单独使用，做按钮/卡片的局部加载提示。</li>
    </ul>
  </div>
);

export default Doc;
