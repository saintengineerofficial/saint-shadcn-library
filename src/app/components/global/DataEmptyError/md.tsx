const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>统一的空态 / 错误态组件，配合 DataWrapper 使用，内置两张提示图。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>data</code>: 判空依据，空数组/undefined 会展示「No data」。</li>
      <li><code>error</code>: 存在时优先展示错误态，取 <code>error.message.error</code>。</li>
      <li><code>className</code>: 控制容器高度与定位，默认白色文字。</li>
    </ul>
  </div>
);

export default Doc;
