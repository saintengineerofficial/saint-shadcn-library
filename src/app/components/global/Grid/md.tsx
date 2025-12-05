const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>基于 CSS Grid 的宫格组件，提供 <code>Grid</code> + <code>Grid.Item</code> 组合，支持 span / gap。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>columns</code> / <code>rows</code>: 指定网格行列数，默认以 px2vw 转换 gap。</li>
      <li><code>gap</code>: 数字/字符串或 [row, column] 形式。</li>
      <li><code>itemPositions</code>: 按序控制子元素的 columnStart/End。</li>
      <li><code>Grid.Item</code>: 支持 <code>span</code> 或 <code>gridColumn</code> 精确控制占位。</li>
    </ul>
  </div>
);

export default Doc;
