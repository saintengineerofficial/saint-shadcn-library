const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>网格骨架屏，快速替代列表请求期间的空白闪烁。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>rows</code> / <code>columns</code>: 行列数量，默认 2x4。</li>
      <li><code>cardClassName</code>: 单元格尺寸/圆角等样式。</li>
      <li><code>containerClassName</code>: 外层容器样式，可加 padding/background。</li>
    </ul>
  </div>
);

export default Doc;
