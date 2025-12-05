import { useState } from "react";

import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { DialogFrame } from "./DialogFrame";

const Demo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-3">
      <Button onClick={() => setOpen(true)}>打开弹窗</Button>
      <DialogFrame open={open} onClose={() => setOpen(false)} className="w-full max-w-md">
        <div className="space-y-2">
          <DialogTitle>示例弹窗标题</DialogTitle>
          <DialogDescription>BaseDialog/DialogFrame 示例内容。</DialogDescription>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            取消
          </Button>
          <Button onClick={() => setOpen(false)}>确认</Button>
        </div>
      </DialogFrame>
    </div>
  );
};

export default Demo;
