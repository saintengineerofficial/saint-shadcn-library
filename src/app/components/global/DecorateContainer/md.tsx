const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>装饰型背景容器，支持顶部/中部/底部三段背景图拼接，内容层覆盖在背景之上。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>topSection</code>/<code>middleSection</code>/<code>bottomSection</code>: 传入图片与尺寸 class。</li>
      <li>中部默认 <code>bgRepeatY</code>，用于纵向延展。</li>
      <li>内部会根据三段高度计算最小高度，避免内容层塌陷。</li>
    </ul>
  </div>
);

export default Doc;
