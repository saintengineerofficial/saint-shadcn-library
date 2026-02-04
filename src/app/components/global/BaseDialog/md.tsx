const Doc = () => (
  <div className="space-y-2 text-sm text-slate-700">
    <p>BaseDialog 相关组件封装在目录 <code>src/app/components/global/BaseDialog</code>。</p>
    <p className='italic text-blue-400'>
      具体代码建议看仓库，核心是通过 Radix Dialog + eventbus 实现的。
      <br />
      通过 DialogProvider 将 Dialog 注册到 eventbus 中，并在 Dialog 中实现具体的弹窗内容。
      <br />
      全局弹窗可以通过 openDialog 方法进行打开，并通过 closeDialog 方法关闭。
    </p>
  </div>
);

export default Doc;
