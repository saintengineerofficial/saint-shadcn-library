const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>横向中心向两侧衰减的渐变背景，支持上下细线高光，适合 Banner、按钮条背景。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li><code>color</code> / <code>borderColor</code>: 主色与高光颜色，默认 #FAAD14。</li>
      <li><code>top</code> / <code>bottom</code>: 是否渲染上下高光线。</li>
      <li>内部用 CSS 变量计算 RGB，保证可在 tailwind 之外复用。</li>
    </ul>
  </div>
);

export default Doc;
