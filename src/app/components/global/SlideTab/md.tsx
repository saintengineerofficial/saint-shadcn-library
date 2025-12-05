const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>可滑动的 Tab 容器，支持鼠标拖拽与触摸滑动，移动端友好。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li>使用 <code>&lt;Tabs&gt;</code> + <code>&lt;Tabs.Content&gt;</code> 组织内容。</li>
      <li><code>initialTabIndex</code>: 初始选中下标。</li>
      <li>拖拽超过 50px 触发切换，可在 children 外层自定义指示器。</li>
    </ul>
  </div>
);

export default Doc;
