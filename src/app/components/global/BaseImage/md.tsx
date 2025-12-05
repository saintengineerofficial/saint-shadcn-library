const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>对 <code>next/image</code> 的简化封装，fill + object-contain，禁用拖拽。</p>
    <ul className="list-disc space-y-1 pl-5">
      <li>父容器需设置尺寸；组件本身接收全部 <code>Image</code> props。</li>
      <li>适合头像、展示图等等比展示场景，不做懒加载逻辑。</li>
    </ul>
  </div>
);

export default Doc;
