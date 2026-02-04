import Grid from ".";

const Demo = () => (
  <div className="space-y-3 text-sm text-slate-700">
    <p>支持 span 与自定义间距的宫格布局。</p>
    <Grid columns={4} rows={2} gap={12} className="rounded-xl bg-slate-50 p-4">
      <Grid.Item className="h-[80px] rounded-lg bg-white shadow-sm">卡片 1</Grid.Item>
      <Grid.Item className="h-[80px] rounded-lg bg-white shadow-sm">卡片 2</Grid.Item>
      <Grid.Item span={2} className="h-[80px] rounded-lg bg-white shadow-sm">
        跨 2 列
      </Grid.Item>
      <Grid.Item className="h-[80px] rounded-lg bg-white shadow-sm">卡片 4</Grid.Item>
      <Grid.Item gridColumn="span 2 / span 2" className="h-[80px] rounded-lg bg-white shadow-sm">
        自定义 gridColumn
      </Grid.Item>
      <Grid.Item className="h-[80px] rounded-lg bg-white shadow-sm">卡片 6</Grid.Item>
    </Grid>
  </div>
);

export default Demo;
