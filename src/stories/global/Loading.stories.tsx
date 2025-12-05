import type { Meta, StoryObj } from "@storybook/react";

import LoadingWrapper from "@/app/components/global/Loading";

const meta = {
  title: "Business/Global/LoadingWrapper",
  component: LoadingWrapper,
  args: {
    isLoading: true,
  },
} satisfies Meta<typeof LoadingWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  render: (args) => <LoadingWrapper {...args} />,
};

export const WithContent: Story = {
  args: {
    isLoading: false,
  },
  render: (args) => (
    <LoadingWrapper {...args}>
      <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-700">
        内容加载完成
      </div>
    </LoadingWrapper>
  ),
};
