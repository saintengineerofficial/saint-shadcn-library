import type { Meta, StoryObj } from "@storybook/react";

import BackgroundSection from "@/app/components/global/BackgroundSection";

const meta = {
  title: "Business/Global/BackgroundSection",
  component: BackgroundSection,
  args: {
    imagePath: "/next.svg",
    className: "h-[220px]",
    childrenClassName: "flex items-center justify-center",
  },
} satisfies Meta<typeof BackgroundSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageFill: Story = {
  render: (args) => (
    <BackgroundSection {...args}>
      <div className="rounded-lg bg-white/80 px-6 py-4 text-sm text-slate-900 shadow-sm">
        背景填充模式示例
      </div>
    </BackgroundSection>
  ),
};

export const RepeatY: Story = {
  args: {
    mode: "bgRepeatY",
    imagePath: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=900&q=80",
  },
  render: (args) => (
    <BackgroundSection {...args}>
      <div className="rounded-lg bg-white/80 px-6 py-4 text-sm text-slate-900 shadow-sm">
        背景纵向平铺
      </div>
    </BackgroundSection>
  ),
};

export const RepeatX: Story = {
  args: {
    mode: "bgRepeatX",
    imagePath: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80",
  },
  render: (args) => (
    <BackgroundSection {...args}>
      <div className="rounded-lg bg-white/80 px-6 py-4 text-sm text-slate-900 shadow-sm">
        背景横向平铺
      </div>
    </BackgroundSection>
  ),
};
