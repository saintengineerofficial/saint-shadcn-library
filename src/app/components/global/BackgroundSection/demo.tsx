import BackgroundSection from ".";

export const BackgroundSectionDemo = () => (
  <div className="space-y-4 flex flex-col items-center">
    <BackgroundSection
      imagePath="/image/list-bg-03.png"
      className="w-[750px] h-[143px]"
      childrenClassName='text-white flex-col'
    >
      <p>背景填充示例</p>
      <span>demo</span>
      <span>demo</span>
    </BackgroundSection>

    <div className='w-[282px] h-[32px] overflow-hidden'>
      <BackgroundSection imagePath='/image/progress-bg.png' className='w-[282px] h-[32px]'
        childrenClassName='px-[5px] justify-start'>
        <BackgroundSection mode='bgRepeatX' imagePath='/image/progress-item.png'
          className='rounded-full w-[100px] h-[24px]' style={{ width: '100px' }} />
        <span className='text-white text-[20px] absolute right-[5px]'>0/100</span>
      </BackgroundSection>
    </div>
  </div>
);
