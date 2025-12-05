import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";

import { DialogFrame, type DialogFrameProps } from "@/app/components/global/BaseDialog/DialogFrame";

const DialogPreview = (props: DialogFrameProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>打开弹窗</Button>
      <DialogFrame
        {...props}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="space-y-2">
          <DialogTitle>示例弹窗标题</DialogTitle>
          <DialogDescription>这是业务组件 BaseDialog 的展示内容。</DialogDescription>
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

const meta = {
  title: "Business/BaseDialog/DialogFrame",
  component: DialogFrame,
  args: {
    className: "w-full max-w-md",
  },
} satisfies Meta<typeof DialogFrame>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: DialogFrameProps) => <DialogPreview {...args} />,
};
