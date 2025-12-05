const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>内部封装的 <code>next/image</code>，填充父容器且默认等比居中，缺省时展示透明 base64 占位。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li>透传 next/image props，支持 <code>StaticImageData</code> 与远程 url。</li>
      <li>常用于错误态/占位图，避免空 src 报错。</li>
    </ul>
  </div>
);

export default Doc;
