const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>列表兜底容器：当 <code>list</code> 为空时渲染 <code>DataEmptyError</code>，否则渲染子节点。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>list</code>: 任意数组，空数组/undefined 会走兜底态。</li>
      <li><code>error</code>: 透传接口错误对象，用于错误态文案展示。</li>
      <li>常用于列表、卡片瀑布流的 loading 结束后展示空态。</li>
    </ul>
  </div>
);

export default Doc;
