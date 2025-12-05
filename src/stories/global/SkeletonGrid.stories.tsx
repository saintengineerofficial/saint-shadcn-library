import type { Meta, StoryObj } from "@storybook/react";

import SkeletonGrid from "@/app/components/global/SkeletonGrid";

const meta = {
  title: "Business/Global/SkeletonGrid",
  component: SkeletonGrid,
  args: {
    rows: 2,
    columns: 4,
  },
} satisfies Meta<typeof SkeletonGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div className="p-6">
      <SkeletonGrid {...args} />
    </div>
  ),
};
