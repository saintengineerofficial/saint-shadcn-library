const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>轻量视频容器，移除原生控件，默认自动播放/循环/静音，适合作为背景或装饰。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li>透传 <code>video</code> 属性，可根据需要开启/关闭 <code>controls</code>、<code>muted</code>。</li>
      <li>内置样式隐藏 iOS 播放按钮，防止遮挡画面。</li>
      <li>记得设置 <code>poster</code> 或占位背景，避免白屏闪烁。</li>
    </ul>
  </div>
);

export default Doc;
