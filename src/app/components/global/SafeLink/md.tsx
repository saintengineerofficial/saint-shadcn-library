const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>带禁用态的 Link 包装，阻止默认跳转，避免在未满足条件时误触。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>href</code>: Next.js 路由地址。</li>
      <li><code>disabled</code>: true 时 <code>preventDefault</code>，可配合运营位上报或登录校验。</li>
    </ul>
  </div>
);

export default Doc;
