"use client";

import Space from ".";

const Demo = () => (
  <div className="space-y-3 text-sm text-slate-700">
    <p>宽高占位组件：在可视区域内占格</p>
    <div className="flex items-center gap-30">
      <div className='flex items-center rounded-lg bg-slate-900 p-3'>
        <div className="w-[120px] h-[60px] rounded-lg bg-slate-100 p-3" >左</div>
        <Space w="w-[20px]" />
        <div className="w-[120px] h-[60px] rounded-lg bg-slate-100 p-3" >右</div>
      </div>

      <div className='rounded-lg bg-slate-900 p-3'>
        <div className="w-[120px] h-[60px] rounded-lg bg-slate-100 p-3" >上</div>
        <Space h="h-[20px]" />
        <div className="w-[120px] h-[60px] rounded-lg bg-slate-100 p-3" >下</div>
      </div>
    </div>
  </div>
);

export default Demo;
