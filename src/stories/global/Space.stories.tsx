import type { Meta, StoryObj } from "@storybook/react";

import Space from "@/app/components/global/Space";

const meta = {
  title: "Business/Global/Space",
  component: Space,
  args: {
    w: "w-[200px]",
    h: "h-[120px]",
  },
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Space {...args}>
      <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-700">
        Space 容器
      </div>
    </Space>
  ),
};
