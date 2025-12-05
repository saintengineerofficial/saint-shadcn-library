const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>SVGA 动画播放器，封装缓存、延迟执行与手动播放控制。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>url</code>: svga 文件地址，会自动缓存到 DB。</li>
      <li><code>options</code>: 透传 Player 配置，如 <code>loop</code>、<code>isCacheFrames</code>。</li>
      <li><code>ref.play()</code>: 暴露手动播放方法，<code>onReady</code> 返回 player 实例。</li>
      <li>默认使用 IntersectionObserver，进入视口后再渲染，避免离屏占用。</li>
    </ul>
  </div>
);

export default Doc;
