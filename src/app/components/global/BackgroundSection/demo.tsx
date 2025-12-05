import BackgroundSection from ".";

export const BackgroundSectionDemo = () => (
  <div className="space-y-4">
    <BackgroundSection
      imagePath="/next.svg"
      className="h-[200px]"
      childrenClassName="flex items-center justify-center"
    >
      <div className="rounded-lg bg-white/80 px-6 py-4 text-sm text-slate-900 shadow-sm">
        背景填充示例
      </div>
    </BackgroundSection>
    <BackgroundSection
      mode="bgRepeatX"
      imagePath="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80"
      className="h-[160px]"
      childrenClassName="flex items-center justify-center"
    >
      <div className="rounded-lg bg-white/80 px-6 py-3 text-sm text-slate-900 shadow-sm">
        横向平铺示例
      </div>
    </BackgroundSection>
  </div>
);
