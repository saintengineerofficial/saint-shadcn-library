const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>用 div 包裹点击区域，内部统一处理 push/back/replace、prefetch 以及可选 refresh。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>link</code>: 目标路径，提供 <code>replace</code> / <code>refresh</code> / <code>prefetch</code> 控制。</li>
      <li><code>back</code>: true 时直接触发 <code>router.back()</code>。</li>
      <li><code>onClick</code>: 返回 false 可阻止导航，适合登录校验、埋点完成后再跳转。</li>
    </ul>
  </div>
);

export default Doc;
