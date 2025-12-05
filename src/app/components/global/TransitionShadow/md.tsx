const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>顶部渐隐遮罩，常用于 Banner/视频封面强化对比度，保证白色标题可读。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li>绝对定位覆盖容器顶部，默认高度 200px，可通过 <code>className</code> 调整。</li>
      <li>可叠加在图片、视频或彩色背景上，保持文案可读性。</li>
    </ul>
  </div>
);

export default Doc;
