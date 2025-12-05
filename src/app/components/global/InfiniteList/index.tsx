'use client'
import React, { useCallback, useEffect, useRef } from 'react';

import { LoaderCircle } from 'lucide-react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLockFn } from '@/hooks/useLockFn';

export interface InfiniteScrollProps {
  hasMore: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  loadMore: () => Promise<void>;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = React.memo((props) => {
  const intersectionEleRef = useRef<HTMLDivElement>(null);

  const observerEntry = useIntersectionObserver(intersectionEleRef, {});

  const doLoadMore = useLockFn(() => props.loadMore());

  const hanldeTouch = useCallback(async () => {
    if (!observerEntry?.isIntersecting || !props.hasMore) return;
    // 为true的时候，证明见到loading，开始发起请求
    await doLoadMore();
  }, [doLoadMore, observerEntry?.isIntersecting, props.hasMore]);

  useEffect(() => {
    hanldeTouch();
  }, [hanldeTouch]);

  return (
    <div>
      {props.children}
      <div className='flex items-center justify-center' ref={intersectionEleRef}>
        {props.footer && props.footer}
        {!props.footer && (props.hasMore ? <LoaderCircle className='animate-spin' size={20} /> : '')}
      </div>
    </div>
  );
});

InfiniteScroll.displayName = 'InfiniteScroll';

export default InfiniteScroll;