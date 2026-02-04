"use client";

import dynamic from 'next/dynamic';

const RuleDialogAsync = dynamic(() => import('./RuleDialog').then(module => module.RuleDialogContent), {
  loading: () => <div>Loading...</div>,
  ssr: false,
})


export enum DialogType {
  Rule = "Rule",
}

export const dialogRegistry = {
  [DialogType.Rule]: RuleDialogAsync,
}

