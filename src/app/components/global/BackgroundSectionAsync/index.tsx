"use client";

import dynamic from 'next/dynamic';

const BackgroundSectionAsync = dynamic(() => import('./BackgroundSection'), {
  ssr: false,
})

export default BackgroundSectionAsync;