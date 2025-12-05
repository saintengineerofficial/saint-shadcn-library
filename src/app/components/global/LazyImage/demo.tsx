"use client";

import LazyImage from ".";

const Demo = () => (
  <div className="space-y-4">
    <div>
      <p className="mb-2 text-sm text-slate-700">懒加载：进入视口后才替换真实地址。</p>
      <LazyImage
        lazy
        loading="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB3klEQVRYR+2XQWtTQRDHP0RLIlStgIGKFEtsRsEuRDAS7SJGXEhiK4KVKKKxFhZ8AH9BJuDGJiQ2qRFBEwqhCECBiFRtaCpIaokCLrXfPOe3Zk3MrM7Z367s2dmzzsx+71/7zjyHk0mk0bYacStbZcRzDDrjtBeQ2OYO4kM2mq5rYAZjvCAguoN8OsXG3Gyt1LSjcc98cxFjqs9XtaH0dGeZJ2HZMT43boYj4DfFbE/HYVQPIc6GWoZYf3qAXD82mG6v4KgtTAYkN9Mecw3Uy0RcVq7/41ZtIH4sOVJqgwkxz7WfWPsgzGPp44Eh8ANwX3uwNcoNsEVqs21BD0lqDfDeSnHsXPhIa5NdvvHo7tOlR+0BdC0qq9EDW7whjJhxkkqsnNB2drb4hOAGU7QXYYdY39Kp6xI1PgVIdLqgx5X5oP6Tr1V+rfcB/x3wOggeN4PkXsq7Q/BIIO+u/yMstLvXNLnQzsHLcV1U9kHgywH7/g05YRkAqydakWY803I6kPI+0En4L7Z7ZCwGJ+T7Xv0qRtBmgZKNGJZzVzAslUlIfTzhbg6HdxeUz4k5f4eQey3AVx3L29kDTj5uAp1e/iGHEgXunDT0zwAAAABJRU5ErkJggg=="
        src="https://images.unsplash.com/photo-1527169402691-feff5539e52c?w=800&auto=format&fit=crop&q=80"
        alt="lazy"
        className="h-[140px] w-full overflow-hidden rounded-lg border border-slate-200"
      />
    </div>
    <div>
      <p className="mb-2 text-sm text-slate-700">非懒加载：直接展示真实图片。</p>
      <LazyImage
        src="https://images.unsplash.com/photo-1506617420156-8e4536971650?w=800&auto=format&fit=crop&q=80"
        alt="eager"
        className="h-[140px] w-full overflow-hidden rounded-lg border border-slate-200"
      />
    </div>
  </div>
);

export default Demo;
